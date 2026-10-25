import React, { useState, useMemo } from 'react';
import { DressItem } from '../types';
import { Heart, Search, Eye, Sparkles, SlidersHorizontal } from 'lucide-react';

interface CollectionSectionProps {
  items: DressItem[];
  onSelectDress: (dress: DressItem) => void;
  favorites: DressItem[];
  onToggleFavorite: (dress: DressItem) => void;
  onDirectTailor: (dress: DressItem) => void;
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({
  items,
  onSelectDress,
  favorites,
  onToggleFavorite,
  onDirectTailor,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFabricFilter, setSelectedFabricFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'جميع الموديلات' },
    { id: 'evening', label: 'فساتين سهرة وأعراس' },
    { id: 'caftan', label: 'قفاطين وجلابيات' },
    { id: 'abaya', label: 'عبايات عصرية' },
    { id: 'suit', label: 'بدلات وأطقم نسائية' },
  ];

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.fabric.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFabric =
        selectedFabricFilter === 'all' ||
        (selectedFabricFilter === 'silk' && item.fabric.includes('حرير')) ||
        (selectedFabricFilter === 'crepe' && item.fabric.includes('كريب')) ||
        (selectedFabricFilter === 'chiffon' && item.fabric.includes('شيفون'));

      return matchesCategory && matchesSearch && matchesFabric;
    });
  }, [items, activeCategory, searchQuery, selectedFabricFilter]);

  const isFav = (id: string) => favorites.some((f) => f.id === id);

  return (
    <section id="collections" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#DB2777] mb-2 tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>تشكيلة السلطانة الحصرية</span>
            <span aria-hidden="true">·</span>
            <span>أزياء حديثة ومبتكرة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2A1823] font-serif-luxury tracking-tight mb-4">
            مجموعة الأزياء الحديثة لعام 2026
          </h2>
          <p className="text-base text-[#6E4B5B] leading-relaxed">
            كل قطعة تمثل توليفة فريدة بين أرقى صيحات الموضة العالمية ودقة التفصيل اليدوي في مركز السلطانة، ومتاحة للتفصيل حسب مقاساتكِ وألوانكِ المفضلة.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 bg-[#FFF9FB] p-3 sm:p-4 rounded-2xl border border-[#F8E2EA]">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#DB2777] text-white shadow-xs'
                    : 'text-[#6B4B5B] hover:text-[#DB2777] hover:bg-[#FFF0F4]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#A66B81] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="ابحثي عن موديل أو نوع قماش..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 text-xs sm:text-sm bg-white border border-[#F5D5E1] rounded-full focus:outline-none focus:ring-2 focus:ring-[#DB2777]/30 focus:border-[#DB2777] text-[#291722] placeholder:text-[#A66B81]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#A66B81] hover:text-[#291722]"
              >
                مسح
              </button>
            )}
          </div>
        </div>

        {/* Quick Fabric Tags Filter */}
        <div className="flex items-center gap-2 mb-8 text-xs text-[#734E5F] overflow-x-auto pb-1">
          <span className="flex items-center gap-1 font-semibold text-[#9D174D] whitespace-nowrap">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            تصفية بالقماش:
          </span>
          <button
            onClick={() => setSelectedFabricFilter('all')}
            className={`px-3 py-1 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              selectedFabricFilter === 'all'
                ? 'bg-[#FCE7F0] text-[#9D174D] font-medium'
                : 'bg-white border border-[#F3DEE6] text-[#6E4B5B] hover:bg-[#FFF5F8]'
            }`}
          >
            الكل
          </button>
          <button
            onClick={() => setSelectedFabricFilter('silk')}
            className={`px-3 py-1 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              selectedFabricFilter === 'silk'
                ? 'bg-[#FCE7F0] text-[#9D174D] font-medium'
                : 'bg-white border border-[#F3DEE6] text-[#6E4B5B] hover:bg-[#FFF5F8]'
            }`}
          >
            أقمشة الحرير الخالص
          </button>
          <button
            onClick={() => setSelectedFabricFilter('chiffon')}
            className={`px-3 py-1 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              selectedFabricFilter === 'chiffon'
                ? 'bg-[#FCE7F0] text-[#9D174D] font-medium'
                : 'bg-white border border-[#F3DEE6] text-[#6E4B5B] hover:bg-[#FFF5F8]'
            }`}
          >
            شيفون وجورجيت
          </button>
          <button
            onClick={() => setSelectedFabricFilter('crepe')}
            className={`px-3 py-1 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              selectedFabricFilter === 'crepe'
                ? 'bg-[#FCE7F0] text-[#9D174D] font-medium'
                : 'bg-white border border-[#F3DEE6] text-[#6E4B5B] hover:bg-[#FFF5F8]'
            }`}
          >
            كريب صالونا
          </button>
        </div>

        {/* Product Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#FFF9FB] rounded-2xl border border-[#F8E2EA] p-8">
            <p className="text-base font-semibold text-[#291722] mb-2">لا توجد تصاميم مطابقة لبحثكِ حالياً</p>
            <p className="text-xs text-[#734E5F] mb-4">يمكنكِ مسح البحث لتصفح جميع الموديلات، أو طلب تفصيل مخصص بالكامل.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setSelectedFabricFilter('all');
              }}
              className="px-5 py-2 text-xs font-semibold text-[#DB2777] bg-white border border-[#FAD2E1] rounded-full hover:bg-[#FFF0F4]"
            >
              عرض جميع الموديلات
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col bg-white rounded-2xl border border-[#F5E1E9] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* 3:4 Media Slot */}
                <div className="relative aspect-[3/4] bg-[#FFF5F8] overflow-hidden cursor-pointer" onClick={() => onSelectDress(item)}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Favorite button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(item);
                    }}
                    className="absolute top-3.5 left-3.5 p-2 rounded-full bg-white/90 backdrop-blur-xs text-[#734E5F] hover:text-[#DB2777] shadow-xs hover:scale-110 transition-all cursor-pointer"
                    aria-label="حفظ في المفضلة"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isFav(item.id) ? 'fill-[#DB2777] text-[#DB2777]' : ''
                      }`}
                    />
                  </button>

                  {/* Quick Preview overlay indicator */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/95 text-xs font-semibold text-[#291722] rounded-full shadow-md">
                      <Eye className="w-3.5 h-3.5 text-[#DB2777]" />
                      تفاصيل الموديل
                    </span>
                  </div>
                </div>

                {/* Card Content & Metadata */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata with · separator */}
                    <div className="flex items-center gap-2 text-xs text-[#8A5A6D] mb-2 font-medium">
                      <span>{item.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate max-w-[140px]">{item.fabric.split('مع')[0]}</span>
                      <span aria-hidden="true">·</span>
                      <span>مدة التفصيل {item.durationDays} أيام</span>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => onSelectDress(item)}
                      className="text-base font-bold text-[#2A1823] hover:text-[#DB2777] transition-colors cursor-pointer mb-2 leading-snug line-clamp-2"
                    >
                      {item.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-[#6E4B5B] line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Row: Price + Action Button */}
                  <div className="pt-3 border-t border-[#F9E8EF] flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] text-[#8A5A6D] block">التكلفة التقريبية للتفصيل:</span>
                      <span className="text-base font-bold text-[#9D174D] font-mono tabular-nums">
                        {item.priceEstimate.toLocaleString()} ريال
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectDress(item)}
                        className="px-3.5 py-1.5 text-xs font-semibold text-[#734E5F] bg-[#FFF0F4] hover:bg-[#FCE2EB] rounded-full transition-colors cursor-pointer"
                      >
                        معاينة
                      </button>
                      <button
                        onClick={() => onDirectTailor(item)}
                        className="px-4 py-1.5 text-xs font-semibold text-white bg-[#DB2777] hover:bg-[#BE185D] rounded-full shadow-2xs transition-colors cursor-pointer"
                      >
                        طلب تفصيل
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
