import React from 'react';
import { TechnologyCard } from './TechnologyCard';
import { SelectedStackSidebar } from './SelectedStackSidebar';
import type { ITechnology } from '../Types/tecnhologyType';

interface TechnologiesSectionProps {
    technologies: ITechnology[];
    selectedStack: ITechnology[];
    onToggleTechnology: (tech: ITechnology) => void;
    onRemoveTech: (id: string) => void;
    onClearAll: () => void;
}

export const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({
    technologies,
    selectedStack,
    onToggleTechnology,
    onRemoveTech,
    onClearAll,
}) => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                    Explore the{' '}
                    <span className="bg-gradient-to-r from-[#FF6B4A] via-[#A855F7] to-[#6366F1] bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>
                <p className="text-gray-500 text-sm sm:text-base mt-2">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {technologies.map((tech) => (
                        <TechnologyCard
                            key={tech.id}
                            technology={tech}
                            isSelected={selectedStack.some((item) => item.id === tech.id)}
                            onToggleSelect={onToggleTechnology}
                        />
                    ))}
                </div>

                <div className="lg:col-span-1">
                    <SelectedStackSidebar
                        selectedTechs={selectedStack}
                        onRemoveTech={onRemoveTech}
                        onClearAll={onClearAll}
                    />
                </div>
            </div>
        </section>
    );
};