import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, ActivityIndicator, Alert, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAvatar } from '../../store/avatarStore';
import { API_CONFIG } from '../../config/apiConfig';

interface Props {
  onClose: () => void;
}

const heightOptions = [
  "4.10", "4.11",
  "5.0", "5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "5.7", "5.8", "5.9", "5.10", "5.11",
  "6.0", "6.1", "6.2", "6.3", "6.4", "6.5"
];

// High-quality public URLs for quick demo testing on mobile/web
const DEMO_SELFIE_URL = 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80'; // Clean face
const DEMO_BODY_URL = 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=80'; // Standing full body

export const LegacyTryOnFlow: React.FC<Props> = ({ onClose }) => {
  const { setCustomAvatar, setProfileInfo, size, bodyType } = useAvatar();
  const [step, setStep] = useState<'profile' | 'upload' | 'processing'>('profile');
  
  // New States and Refs for Production Network Resilience
  const [customLoadingText, setCustomLoadingText] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const handleCancelOrClose = () => {
    if (isProcessing) {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      setIsProcessing(false);
      setStep('upload');
      setCustomLoadingText(null);
    } else {
      onClose();
    }
  };

  // Profile Form States
  const [name, setName] = useState('');
  const [gender, setGender] = useState<'Male' | 'Female'>('Male');
  const [height, setHeight] = useState('5.7');
  const [isHeightDropdownOpen, setIsHeightDropdownOpen] = useState(false);

  // Upload States
  const [selfieSrc, setSelfieSrc] = useState<string | null>(null); // blob URI or remote URL
  const [bodySrc, setBodySrc] = useState<string | null>(null);

  // Helper references for web files
  const selfieInputRef = useRef<any>(null);
  const bodyInputRef = useRef<any>(null);

  // Loading Step Animations
  const [loadingStep, setLoadingStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const processingTexts = [
    "Analyzing body proportions...",
    "Mapping key landmarks...",
    "Matching skin tone...",
    "Rendering AI avatar...",
    "Applying face swap...",
    "Finalizing details..."
  ];

  useEffect(() => {
    if (step !== 'processing') {
      setLoadingStep(0);
      return;
    }
    const interval = setInterval(() => {
      setLoadingStep(prev => (prev < 5 ? prev + 1 : 5));
    }, 1500);
    return () => clearInterval(interval);
  }, [step]);

  const handleProfileSubmit = () => {
    if (!name.trim()) {
      Alert.alert("Input Required", "Please enter your name.");
      return;
    }
    setProfileInfo(name, gender, height);
    setStep('upload');
  };

  // Convert blob URI or remote URL to Blob for FormData upload
  const fetchImageBlob = async (uri: string): Promise<Blob> => {
    const response = await fetch(uri);
    return await response.blob();
  };

  const handleStartGeneration = async () => {
    if (!selfieSrc || !bodySrc) {
      Alert.alert("Missing Photos", "Please upload or select both a selfie and a body photo.");
      return;
    }

    setStep('processing');
    setIsProcessing(true);
    setCustomLoadingText(null);

    const maxRetries = 2;
    let attempt = 0;
    
    // Prepare blobs
    let selfieBlob: Blob;
    let bodyBlob: Blob;
    try {
      setCustomLoadingText("Preparing files...");
      selfieBlob = await fetchImageBlob(selfieSrc);
      bodyBlob = await fetchImageBlob(bodySrc);
    } catch (e: any) {
      console.error("Blob conversion error:", e);
      Alert.alert("File Error", "Could not load the selected images. Please try re-selecting them.");
      setIsProcessing(false);
      setStep('upload');
      return;
    }

    const runAttempt = async (): Promise<any> => {
      attempt++;
      
      // Setup AbortController for this attempt
      const controller = new AbortController();
      abortControllerRef.current = controller;

      // 180 seconds (3 minutes) timeout
      const timeoutId = setTimeout(() => {
        controller.abort();
      }, 180000);

      try {
        if (attempt > 1) {
          setCustomLoadingText(`Retrying request (Attempt ${attempt}/${maxRetries + 1})...`);
        } else {
          setCustomLoadingText("Sending request to server...");
        }

        const formData = new FormData();
        formData.append('selfie_image', selfieBlob, 'selfie.png');
        formData.append('body_image', bodyBlob, 'body.png');
        formData.append('user_height', height);
        formData.append('size', size);
        formData.append('body_type', bodyType);

        const res = await fetch(API_CONFIG.PROCESS_AVATAR, {
          method: 'POST',
          body: formData,
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!res.ok) {
          // Parse error description if available
          let errorDetail = `Server returned status ${res.status}`;
          try {
            const errJson = await res.json();
            if (errJson && errJson.error) {
              errorDetail = errJson.error;
            }
          } catch (e) {}

          // Handle server waking up (Render Free Tier 502 / 503 / 504 / 408)
          if (res.status === 502 || res.status === 503 || res.status === 504 || res.status === 408) {
            if (attempt <= maxRetries) {
              setCustomLoadingText("Server is waking up. Please wait...");
              // Wait 15 seconds before retrying to let the server boot up
              await new Promise(r => setTimeout(r, 15000));
              return await runAttempt();
            }
          }

          const httpError: any = new Error(errorDetail);
          httpError.status = res.status;
          throw httpError;
        }

        const data = await res.json();
        if (!data.image || !data.metadata) {
          throw new Error("Invalid response format from server.");
        }

        return data;
      } catch (error: any) {
        clearTimeout(timeoutId);
        
        if (error.name === 'AbortError') {
          // Check if abort was due to timeout or user cancel
          if (abortControllerRef.current === controller) {
            // It was a timeout!
            if (attempt <= maxRetries) {
              setCustomLoadingText("Server is waking up. Please wait...");
              await new Promise(r => setTimeout(r, 5000));
              return await runAttempt();
            }
            const timeoutErr: any = new Error("Request timed out after 3 minutes.");
            timeoutErr.status = 408;
            throw timeoutErr;
          } else {
            // Cancelled by user
            throw new Error("Request cancelled by user");
          }
        }

        // Handle network connection error
        if (error.message && error.message.toLowerCase().includes('network request failed')) {
          if (attempt <= maxRetries) {
            setCustomLoadingText("Server is waking up. Please wait...");
            await new Promise(r => setTimeout(r, 15000)); // wait 15s for Render wake up
            return await runAttempt();
          }
        }

        throw error;
      } finally {
        if (abortControllerRef.current === controller) {
          abortControllerRef.current = null;
        }
      }
    };

    try {
      const data = await runAttempt();
      
      // Success - Save avatar image URI and metadata into store
      setCustomAvatar(data.image, data.metadata);
      setIsProcessing(false);
      setCustomLoadingText(null);
      onClose(); // Exit onboarding flow
    } catch (error: any) {
      if (error.message === "Request cancelled by user") {
        setIsProcessing(false);
        setStep('upload');
        setCustomLoadingText(null);
        return;
      }

      console.error("Avatar Generation Error:", error);
      
      // Determine user-friendly error message based on error type
      let userFriendlyTitle = "Generation Failed";
      let userFriendlyMsg = `Could not generate avatar. Make sure the Python backend is running on Render.\n\nError: ${error.message}`;

      if (error.status) {
        switch (error.status) {
          case 404:
            userFriendlyTitle = "Service Unavailable (404)";
            userFriendlyMsg = "The generation endpoint was not found on the server. Please verify your API URL.";
            break;
          case 400:
          case 422:
            userFriendlyTitle = "Invalid Response (422)";
            userFriendlyMsg = "The server rejected the inputs. Please ensure your selfie and body photos are clear and contain visible poses.";
            break;
          case 408:
            userFriendlyTitle = "Server Timeout";
            userFriendlyMsg = "The server took too long to wake up or process the request. Please try again in a few moments.";
            break;
          case 500:
            userFriendlyTitle = "Server Processing Error (500)";
            userFriendlyMsg = "The AI model encountered a processing exception. Try selecting another face selfie or full body image.";
            break;
          case 502:
          case 503:
          case 504:
            userFriendlyTitle = "Gateway Error";
            userFriendlyMsg = "The server is sleeping or under heavy load. Please wait a minute and try again.";
            break;
          default:
            userFriendlyMsg = `Server returned error status code: ${error.status}\n\nMessage: ${error.message}`;
        }
      } else if (error.message && error.message.toLowerCase().includes('network request failed')) {
        userFriendlyTitle = "Network Error";
        userFriendlyMsg = "Unable to connect to the server. Please verify your internet connection or check if the backend service is offline.";
      } else if (error.message && error.message.toLowerCase().includes('json')) {
        userFriendlyTitle = "Parsing Failure";
        userFriendlyMsg = "Failed to parse the server's response. Please ensure your network has no firewall blocking the data.";
      }

      Alert.alert(
        userFriendlyTitle,
        userFriendlyMsg,
        [{ text: "Go Back", onPress: () => setStep('upload') }]
      );
      setIsProcessing(false);
      setCustomLoadingText(null);
    }
  };

  // Web File Picker Handlers
  const handleWebSelfieUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelfieSrc(URL.createObjectURL(file));
    }
  };

  const handleWebBodyUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setBodySrc(URL.createObjectURL(file));
    }
  };

  // Preset selectors for quick testing
  const selectDemoPresets = () => {
    setSelfieSrc(DEMO_SELFIE_URL);
    setBodySrc(DEMO_BODY_URL);
  };

  return (
    <View style={styles.fullscreenOverlay}>
      {/* Onboarding Header */}
      <View style={styles.headerBar}>
        <Text style={styles.headerTitle}>Studio Onboarding</Text>
        <TouchableOpacity style={styles.closeBtn} onPress={handleCancelOrClose}>
          <Ionicons name="close" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Main Form step */}
      {step === 'profile' && (
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.iconContainer}>
            <View style={styles.iconCircle}>
              <Ionicons name="sparkles" size={32} color="#fff" />
            </View>
            <Text style={styles.title}>Create Studio Profile</Text>
            <Text style={styles.subtitle}>Enter details to generate your customized face-swapped avatar.</Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="E.g. Alex Johnson"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.label}>Gender</Text>
            <View style={styles.genderRow}>
              {(['Male', 'Female'] as const).map(g => (
                <TouchableOpacity
                  key={g}
                  style={[styles.genderCard, gender === g && styles.genderCardActive]}
                  onPress={() => setGender(g)}
                >
                  <Text style={[styles.genderText, gender === g && styles.genderTextActive]}>{g}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.label}>Height (Feet.Inches)</Text>
            <TouchableOpacity
              style={styles.dropdownTrigger}
              onPress={() => setIsHeightDropdownOpen(!isHeightDropdownOpen)}
            >
              <Text style={styles.dropdownValue}>{height} ft</Text>
              <Ionicons name={isHeightDropdownOpen ? "chevron-up" : "chevron-down"} size={20} color="#666" />
            </TouchableOpacity>

            {isHeightDropdownOpen && (
              <View style={styles.dropdownList}>
                {heightOptions.map(h => (
                  <TouchableOpacity
                    key={h}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setHeight(h);
                      setIsHeightDropdownOpen(false);
                    }}
                  >
                    <Text style={[styles.dropdownItemText, height === h && styles.dropdownItemTextActive]}>{h} ft</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            <TouchableOpacity style={styles.submitBtn} onPress={handleProfileSubmit}>
              <Text style={styles.submitBtnText}>Continue</Text>
              <Ionicons name="arrow-forward" size={18} color="#fff" style={{ marginLeft: 6 }} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}

      {/* Upload and Selection Step */}
      {step === 'upload' && (
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.sectionTitle}>Upload Reference Photos</Text>
          <Text style={styles.sectionSubtitle}>Select face selfie and full body pose images.</Text>

          <View style={styles.uploadCardsContainer}>
            {/* Selfie card */}
            <View style={styles.uploadCard}>
              <Text style={styles.uploadLabel}>1. Selfie (Face Swap)</Text>
              <TouchableOpacity 
                style={[styles.uploadBox, selfieSrc && styles.uploadBoxSelected]} 
                onPress={() => {
                  if (Platform.OS === 'web') selfieInputRef.current?.click();
                }}
              >
                {selfieSrc ? (
                  <Image source={{ uri: selfieSrc }} style={styles.previewImage} resizeMode="cover" />
                ) : (
                  <View style={styles.uploadBoxPlaceholder}>
                    <Ionicons name="happy-outline" size={32} color="#888" />
                    <Text style={styles.uploadBoxText}>
                      {Platform.OS === 'web' ? "Click to Upload File" : "Native upload uses demo presets"}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>

            {/* Body card */}
            <View style={styles.uploadCard}>
              <Text style={styles.uploadLabel}>2. Standing Body Pose</Text>
              <TouchableOpacity 
                style={[styles.uploadBox, bodySrc && styles.uploadBoxSelected]} 
                onPress={() => {
                  if (Platform.OS === 'web') bodyInputRef.current?.click();
                }}
              >
                {bodySrc ? (
                  <Image source={{ uri: bodySrc }} style={styles.previewImage} resizeMode="cover" />
                ) : (
                  <View style={styles.uploadBoxPlaceholder}>
                    <Ionicons name="body-outline" size={32} color="#888" />
                    <Text style={styles.uploadBoxText}>
                      {Platform.OS === 'web' ? "Click to Upload File" : "Native upload uses demo presets"}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Quick Demo Preselect Action */}
          <TouchableOpacity style={styles.demoPresetBtn} onPress={selectDemoPresets}>
            <Ionicons name="color-wand-outline" size={20} color="#e60000" style={{ marginRight: 6 }} />
            <Text style={styles.demoPresetBtnText}>Use High-Quality Demo Templates</Text>
          </TouchableOpacity>

          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.backBtn} onPress={() => setStep('profile')}>
              <Text style={styles.backBtnText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.generateBtn} onPress={handleStartGeneration}>
              <Text style={styles.generateBtnText}>Generate Avatar</Text>
              <Ionicons name="sparkles" size={16} color="#fff" style={{ marginLeft: 6 }} />
            </TouchableOpacity>
          </View>

          {/* Hidden inputs for web */}
          {Platform.OS === 'web' && (
            <>
              <input
                ref={selfieInputRef}
                type="file"
                accept="image/*"
                onChange={handleWebSelfieUpload}
                style={{ display: 'none' }}
              />
              <input
                ref={bodyInputRef}
                type="file"
                accept="image/*"
                onChange={handleWebBodyUpload}
                style={{ display: 'none' }}
              />
            </>
          )}
        </ScrollView>
      )}

      {/* Generating step */}
      {step === 'processing' && (
        <View style={styles.processingContainer}>
          <ActivityIndicator size="large" color="#e60000" style={{ marginBottom: 20 }} />
          <Text style={styles.processingTitle}>Building Custom Avatar</Text>
          
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: `${((loadingStep + 1) / 6) * 100}%` }]} />
          </View>

          <Text style={styles.processingText}>{customLoadingText || processingTexts[loadingStep]}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fullscreenOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    zIndex: 900,
  },
  headerBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },
  closeBtn: {
    padding: 4,
  },
  content: {
    padding: 24,
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#e60000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#e60000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
    paddingHorizontal: 12,
  },
  form: {
    marginTop: 20,
    gap: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#333',
    marginLeft: 4,
    marginTop: 8,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#111',
    backgroundColor: '#f9fafb',
  },
  genderRow: {
    flexDirection: 'row',
    gap: 12,
  },
  genderCard: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  genderCardActive: {
    borderColor: '#e60000',
    backgroundColor: '#fef2f2',
    borderWidth: 2,
  },
  genderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  genderTextActive: {
    color: '#e60000',
    fontWeight: '700',
  },
  dropdownTrigger: {
    height: 50,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  dropdownValue: {
    fontSize: 14,
    color: '#111',
    fontWeight: '600',
  },
  dropdownList: {
    maxHeight: 160,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginTop: -4,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  dropdownItemText: {
    fontSize: 14,
    color: '#333',
  },
  dropdownItemTextActive: {
    color: '#e60000',
    fontWeight: '700',
  },
  submitBtn: {
    height: 54,
    backgroundColor: '#e60000',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  submitBtnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: '#666',
    marginBottom: 20,
  },
  uploadCardsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  uploadCard: {
    flex: 1,
    gap: 8,
  },
  uploadLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#444',
  },
  uploadBox: {
    height: 160,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    overflow: 'hidden',
  },
  uploadBoxSelected: {
    borderColor: '#10b981',
    borderStyle: 'solid',
  },
  uploadBoxPlaceholder: {
    alignItems: 'center',
    paddingHorizontal: 10,
    gap: 8,
  },
  uploadBoxText: {
    fontSize: 10,
    color: '#888',
    textAlign: 'center',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  demoPresetBtn: {
    height: 50,
    borderWidth: 1,
    borderColor: '#e60000',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#fdf2f2',
  },
  demoPresetBtnText: {
    fontSize: 13,
    color: '#e60000',
    fontWeight: '700',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 32,
  },
  backBtn: {
    flex: 1,
    height: 54,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#666',
  },
  generateBtn: {
    flex: 2,
    height: 54,
    backgroundColor: '#e60000',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  generateBtnText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '700',
  },
  processingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  processingTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111',
    marginBottom: 16,
  },
  progressBarBg: {
    width: '100%',
    height: 8,
    backgroundColor: '#f3f4f6',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 16,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#e60000',
    borderRadius: 4,
  },
  processingText: {
    fontSize: 13,
    color: '#e60000',
    fontWeight: '600',
  },
});
