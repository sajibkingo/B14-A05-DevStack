import React from 'react';
import type { ITechnology } from '../Types/tecnhologyType';


interface SelectedStackSidebarProps {
    selectedTechs: ITechnology[];
    onRemoveTech: (id: string) => void;
    onClearAll: () => void;
}

export const SelectedStackSidebar: React.FC<SelectedStackSidebarProps> = ({
    selectedTechs,
    onRemoveTech,
    onClearAll,
}) => {
    return (
        <aside className="card bg-base-100 border border-gray-100 p-6 shadow-sm sticky top-6 rounded-2xl">
            <div className="border-b border-gray-100 pb-4 mb-4">
                <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
                <p className="text-xs text-gray-500 mt-1">
                    {selectedTechs.length} Technology Selected
                </p>
            </div>

            {selectedTechs.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-400 text-sm">No technologies added yet.</p>
                    <p className="text-gray-400 text-xs mt-1">Pick tools to compose your ideal stack.</p>
                </div>
            ) : (
                <div className="flex flex-col gap-3 max-h-95 overflow-y-auto pr-1">
                    {selectedTechs.map((tech) => (
                        <div
                            key={tech.id}
                            className="flex items-center justify-between p-2.5 rounded-xl border border-gray-100 bg-gray-50/60 hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-6 h-6 object-contain shrink-0"
                                />
                                <div className="truncate">
                                    <p className="text-xs font-semibold text-gray-800 truncate">{tech.name}</p>
                                    <p className="text-[10px] text-gray-400">{tech.category}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => onRemoveTech(tech.id)}
                                className="btn btn-ghost btn-xs btn-square text-gray-400 hover:text-rose-500"
                                title={`Remove ${tech.name}`}
                                aria-label={`Remove ${tech.name}`}
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {selectedTechs.length > 0 && (
                <button
                    onClick={onClearAll}
                    type="button"
                    className="btn btn-outline border-gray-200 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 text-gray-600 btn-sm w-full mt-5 normal-case rounded-xl font-semibold"
                >
                    Remove All
                </button>
            )}
        </aside>
    );
};