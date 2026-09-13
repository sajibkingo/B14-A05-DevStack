import React from 'react';
import type { ITechnology } from '../Types/tecnhologyType';


interface TechnologyCardProps {
    technology: ITechnology;
    isSelected: boolean;
    onToggleSelect: (tech: ITechnology) => void;
}

const getBadgeStyles = (category: ITechnology['category']): string => {
    switch (category) {
        case 'Frontend':
            return 'badge-info bg-blue-50 text-blue-600 border-blue-200';
        case 'Backend':
            return 'badge-success bg-emerald-50 text-emerald-600 border-emerald-200';
        case 'Database':
            return 'badge-primary bg-indigo-50 text-indigo-600 border-indigo-200';
        case 'Language':
            return 'badge-warning bg-amber-50 text-amber-600 border-amber-200';
        case 'Styling':
            return 'badge-accent bg-sky-50 text-sky-600 border-sky-200';
        case 'DevOps':
            return 'badge-error bg-rose-50 text-rose-600 border-rose-200';
        case 'Tools':
            return 'badge-secondary bg-purple-50 text-purple-600 border-purple-200';
        default:
            return 'badge-ghost bg-gray-50 text-gray-600 border-gray-200';
    }
};

export const TechnologyCard: React.FC<TechnologyCardProps> = ({
    technology,
    isSelected,
    onToggleSelect,
}) => {
    const { name, description, badge, category, difficulty, rating, icon } = technology;

    return (
        <div className="card bg-base-100 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow rounded-2xl p-6 flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 flex items-center justify-center">
                        <img src={icon} alt={`${name} logo`} className="w-8 h-8 object-contain" />
                    </div>
                    <span className={`badge border text-xs font-medium py-2.5 px-3 rounded-full ${getBadgeStyles(category)}`}>
                        {badge}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 tracking-tight">{name}</h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                    {description}
                </p>

                <div className="flex items-center flex-wrap gap-2 mt-5 text-xs text-gray-600">
                    <span className="badge badge-ghost bg-gray-100 border-none font-medium text-xs px-2.5 py-2 rounded-md">{category}</span>
                    <span className="badge badge-ghost bg-gray-100 border-none font-medium text-xs px-2.5 py-2 rounded-md">{difficulty}</span>
                    <span className="flex items-center gap-1 font-semibold text-gray-700 ml-auto">
                        <span className="text-amber-400 text-sm">★</span> {rating.toFixed(1)}
                    </span>
                </div>
            </div>

            <button
                onClick={() => onToggleSelect(technology)}
                type="button"
                className={`btn btn-block mt-6 normal-case text-xs font-semibold rounded-xl border transition-all ${isSelected
                        ? 'btn-outline border-rose-200 text-rose-600 hover:bg-rose-50 hover:border-rose-300'
                        : 'bg-[#111827] text-white hover:bg-[#1f2937] border-transparent'
                    }`}
            >
                {isSelected ? 'Remove from Stack' : 'Add to Stack'}
            </button>
        </div>
    );
};