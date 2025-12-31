import React from 'react';
import { X, Calendar, Clock, ChevronRight } from 'lucide-react';

interface CalendarModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // Mock available times
    const times = ["9:00 AM", "10:30 AM", "1:00 PM", "3:30 PM"];

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
            <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row h-[500px]">

                {/* LEFT PANEL: INFO */}
                <div className="bg-slate-900 p-8 text-white md:w-1/3 flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                            <Calendar size={24} />
                        </div>
                        <h3 className="text-2xl font-black mb-2">Strategy Session</h3>
                        <p className="text-slate-400 text-sm mb-4">30 Minute Video Call</p>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            We'll dive deep into your workflow friction points and blueprint a custom AI Agent architecture.
                        </p>
                    </div>
                    <div className="text-xs text-slate-600">
                        &copy; 2024 Agentic Systems
                    </div>
                </div>

                {/* RIGHT PANEL: CALENDAR PICKER */}
                <div className="p-8 md:w-2/3 overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h4 className="font-bold text-slate-900 text-lg">Select a Date & Time</h4>
                        <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                            <X size={20} className="text-slate-500" />
                        </button>
                    </div>

                    {/* MOCK CALENDAR UI */}
                    <div className="mb-6">
                        <div className="flex justify-between font-bold text-slate-900 mb-4 px-2">
                            <span>December 2024</span>
                            <div className="flex gap-2">
                                <button className="text-slate-400 hover:text-slate-600 text-lg">{'<'}</button>
                                <button className="text-slate-400 hover:text-slate-600 text-lg">{'>'}</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2 text-slate-400 text-xs font-bold uppercase">
                            <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                        </div>
                        <div className="grid grid-cols-7 gap-2 text-center text-sm">
                            {/* Empty days */}
                            {[...Array(2)].map((_, i) => <div key={`empty-${i}`} />)}
                            {/* Days 1-31 */}
                            {[...Array(31)].map((_, i) => {
                                const day = i + 1;
                                const isToday = day === 30; // Mock "today"
                                const isAvailable = [28, 29, 30].includes(day);
                                return (
                                    <button
                                        key={day}
                                        className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto transition-all
                       ${isToday ? 'bg-blue-600 text-white font-bold' : ''}
                       ${!isToday && isAvailable ? 'text-slate-700 hover:bg-blue-50 font-medium' : 'text-slate-300 pointer-events-none'}
                     `}
                                    >
                                        {day}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <h5 className="text-sm font-bold text-slate-900 mb-3">Available Times for Dec 30</h5>
                        <div className="grid grid-cols-2 gap-2">
                            {times.map(t => (
                                <button key={t} className="py-2 border border-blue-200 rounded-lg text-blue-600 font-bold hover:bg-blue-50 text-sm transition-colors text-center">
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CalendarModal;
