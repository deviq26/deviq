import React from 'react';
import { FileQuestion, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { useLanguage } from '../context/LanguageContext';

export const NotFoundPage: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full text-center p-8 rounded-3xl bg-[#fdfcf9] border border-amber-950/10 shadow-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200 shadow-2xs">
          <FileQuestion className="w-8 h-8" />
        </div>

        <Badge variant="cyan" size="md" className="mb-3">
          {t.notFound.badge}
        </Badge>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-3">
          {t.notFound.title}
        </h1>

        <p className="text-sm text-slate-800 mb-8 leading-relaxed font-medium">
          {t.notFound.desc}
        </p>

        <Button
          to="/"
          size="md"
          variant="primary"
          leftIcon={isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
        >
          {t.notFound.backHome}
        </Button>
      </div>
    </div>
  );
};
