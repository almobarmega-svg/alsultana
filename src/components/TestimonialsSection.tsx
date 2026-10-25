import React from 'react';
import { CLIENT_REVIEWS } from '../data/fashionData';
import { Star, Quote, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-gradient-to-b from-[#FFFDFE] to-[#FFF5F8] border-t border-[#F8E2EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#DB2777] mb-2 tracking-wide">
            <Sparkles className="w-4 h-4" />
            <span>سيدات السلطانة</span>
            <span aria-hidden="true">·</span>
            <span>تجارب حقيقية موثقة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2A1823] font-serif-luxury tracking-tight mb-3">
            ثقة عميلاتنا هي سر تألقنا الدائم
          </h2>
          <p className="text-sm text-[#6E4B5B] leading-relaxed">
            نفخر بأن نكون الخيار الأول لأجمل اللحظات وحفلات العمر وسيدات المجتمع الراقي.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CLIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-[#F8E2EA] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#FAD2E1] -scale-x-100" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#543846] leading-relaxed mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Author and Meta without pills */}
              <div className="pt-4 border-t border-[#F9E8EF]">
                <div className="flex items-baseline justify-between mb-1">
                  <h4 className="text-sm font-bold text-[#291722]">{review.author}</h4>
                  <span className="text-[11px] text-[#A66B81]">{review.city}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#8A5A6D]">
                  <span>{review.occasion}</span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate max-w-[160px] text-[#DB2777] font-medium">{review.dressChosen}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
