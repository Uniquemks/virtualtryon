import React, { useState, useRef, useEffect } from 'react';
import AvatarCanvas from './AvatarCanvas';
import './index.css';

function App() {
  const [step, setStep] = useState('form');
  const [userData, setUserData] = useState({ name: '', gender: 'Male', height: '' });
  const [selfieSrc, setSelfieSrc] = useState(null);
  const [bodySrc, setBodySrc] = useState(null);
  const [isHeightDropdownOpen, setIsHeightDropdownOpen] = useState(false);
  const selfieInputRef = useRef(null);
  const bodyInputRef = useRef(null);

  // Removed useEffect that was eagerly revoking object URLs. 
  // Object URLs are already revoked in the upload handlers when they are replaced.
  
  const heightOptions = [
    "4.10", "4.11",
    "5.0", "5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "5.7", "5.8", "5.9", "5.10", "5.11",
    "6.0", "6.1", "6.2", "6.3", "6.4", "6.5"
  ];

  const handleSelfieUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (selfieSrc) {
        URL.revokeObjectURL(selfieSrc);
      }
      const url = URL.createObjectURL(file);
      setSelfieSrc(url);
    }
  };

  const handleBodyUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (bodySrc) {
        URL.revokeObjectURL(bodySrc);
      }
      const url = URL.createObjectURL(file);
      setBodySrc(url);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userData.name && userData.height) {
      setStep('avatar');
    }
  };

  if (step === 'form') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4 font-sans relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="max-w-md w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 border border-white/60 relative z-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-indigo-200 mb-4 transform rotate-3">
              <svg className="w-8 h-8 text-white transform -rotate-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700">
              Create Your Profile
            </h2>
            <p className="text-slate-500 mt-2 text-sm">Enter your details to personalize your 2D avatar experience.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700 ml-1">Full Name</label>
              <input 
                type="text" 
                required 
                value={userData.name}
                onChange={(e) => setUserData({...userData, name: e.target.value})}
                className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all bg-white/50 text-slate-800 placeholder-slate-400 font-medium"
                placeholder="E.g. Alex Johnson"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700 ml-1">Gender</label>
              <div className="flex gap-3">
                {['Male', 'Female'].map((g) => (
                  <label key={g} className={`flex-1 cursor-pointer py-3.5 rounded-2xl border-2 text-center transition-all duration-200 ${userData.gender === g ? 'bg-indigo-50/50 border-indigo-500 text-indigo-700 font-bold shadow-sm' : 'border-slate-100 text-slate-500 hover:bg-slate-50 hover:border-slate-200 font-medium'}`}>
                    <input type="radio" className="hidden" name="gender" value={g} checked={userData.gender === g} onChange={(e) => setUserData({...userData, gender: e.target.value})} />
                    {g}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-1.5 relative z-20">
              <label className="block text-sm font-semibold text-slate-700 ml-1">Height (Feet.Inches)</label>
              <div className="relative">
                <div 
                  onClick={() => setIsHeightDropdownOpen(!isHeightDropdownOpen)}
                  className={`w-full px-4 py-3.5 rounded-2xl border ${isHeightDropdownOpen ? 'border-indigo-400 ring-4 ring-indigo-500/20' : 'border-slate-200'} hover:border-indigo-300 outline-none transition-all bg-white/70 backdrop-blur-sm text-slate-800 font-medium cursor-pointer flex justify-between items-center shadow-sm`}
                >
                  <span className={userData.height ? 'text-slate-800 font-bold' : 'text-slate-400'}>
                    {userData.height ? `${userData.height} ft` : 'Select your height'}
                  </span>
                  <svg className={`fill-current h-5 w-5 text-indigo-400 transition-transform duration-300 ${isHeightDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
                
                {isHeightDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-30" 
                      onClick={() => setIsHeightDropdownOpen(false)}
                    ></div>
                    <div className="absolute z-40 w-full mt-2 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] max-h-64 overflow-y-auto py-2 transform transition-all opacity-100 scale-100 origin-top">
                      {heightOptions.map(h => (
                        <div 
                          key={h}
                          onClick={() => {
                            setUserData({...userData, height: h});
                            setIsHeightDropdownOpen(false);
                          }}
                          className={`px-5 py-3 cursor-pointer transition-colors duration-150 flex items-center justify-between ${userData.height === h ? 'bg-indigo-50/80 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600 font-medium'}`}
                        >
                          <span>{h}</span>
                          {userData.height === h && (
                            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <button type="submit" className="w-full py-4 px-4 mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:shadow-[0_6px_25px_rgba(99,102,241,0.5)] transform hover:-translate-y-0.5 transition-all duration-200 text-lg flex items-center justify-center gap-2">
              <span>Continue to Studio</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </form>
        </div>
      </div>
    );
  }

  // SECOND PAGE: Avatar Canvas Page
  return (
    <div className="h-screen w-full bg-[#dcdcdc] font-sans relative overflow-hidden flex flex-col" style={{ backgroundImage: 'radial-gradient(circle at 50% 40%, #e8e8e8 0%, #c4c4c4 100%)' }}>
      
      {/* Subtle Noise Texture for Studio Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Top Header Bar */}
      <header className="absolute top-0 w-full h-24 bg-gradient-to-b from-black/10 to-transparent flex items-start justify-center pt-6 z-50 pointer-events-none">
        {/* Red Logo Approximation from Image */}
        <svg className="w-28 h-12" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 25 Q 50 20 80 22" stroke="#FF0000" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M60 10 C 75 0, 80 15, 60 35 C 50 45, 40 45, 45 40 C 50 35, 65 25, 60 10 Z" stroke="#FF0000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </header>

      {/* Main Area */}
      <main className="flex-1 w-full relative z-10">
        {(selfieSrc && bodySrc) ? (
          <AvatarCanvas 
            selfieSrc={selfieSrc}
            bodySrc={bodySrc}
            userData={userData} 
            onUploadClick={() => {
              if (selfieSrc) URL.revokeObjectURL(selfieSrc);
              if (bodySrc) URL.revokeObjectURL(bodySrc);
              setSelfieSrc(null);
              setBodySrc(null);
            }} 
          />
        ) : (
          <div className="absolute inset-0 flex flex-col md:flex-row gap-8 items-center justify-center text-slate-500 z-10 p-4">
             <div className="flex flex-col items-center">
               <label htmlFor="selfie-upload" className={`cursor-pointer flex flex-col items-center justify-center w-56 h-56 rounded-full border-2 ${selfieSrc ? 'border-green-500 bg-green-50/20' : 'border-dashed border-slate-400/50 hover:bg-white/20 hover:border-slate-500'} transition-all bg-white/5 backdrop-blur-sm shadow-xl overflow-hidden`}>
                  {selfieSrc ? (
                    <img src={selfieSrc} alt="Selfie" className="w-full h-full object-cover" />
                  ) : (
                    <>
                      <svg className="w-12 h-12 mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span className="font-semibold text-lg text-slate-600 text-center px-4">1. Upload Selfie<br/><span className="text-sm font-normal text-slate-400">(Face Swap)</span></span>
                    </>
                  )}
               </label>
             </div>
             
             <div className="flex flex-col items-center">
               <label htmlFor="body-upload" className={`cursor-pointer flex flex-col items-center justify-center w-56 h-56 rounded-full border-2 ${bodySrc ? 'border-green-500 bg-green-50/20' : 'border-dashed border-slate-400/50 hover:bg-white/20 hover:border-slate-500'} transition-all bg-white/5 backdrop-blur-sm shadow-xl overflow-hidden`}>
                  {bodySrc ? (
                    <img src={bodySrc} alt="Body" className="w-full h-full object-cover" />
                  ) : (
                    <>
                      <svg className="w-12 h-12 mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                      <span className="font-semibold text-lg text-slate-600 text-center px-4">2. Upload Body<br/><span className="text-sm font-normal text-slate-400">(Avatar Generation)</span></span>
                    </>
                  )}
               </label>
             </div>
          </div>
        )}
        <input 
          id="selfie-upload"
          ref={selfieInputRef}
          type="file" 
          accept="image/*" 
          onChange={handleSelfieUpload}
          className="hidden"
        />
        <input 
          id="body-upload"
          ref={bodyInputRef}
          type="file" 
          accept="image/*" 
          onChange={handleBodyUpload}
          className="hidden"
        />
      </main>
    </div>
  );
}

export default App;
