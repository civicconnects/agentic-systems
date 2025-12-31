import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface AuditModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        industry: '',
        bottleneck: '',
        budget: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(3); // Success state
        // Here you would typically send data to backend/n8n
        console.log("Audit Submitted:", formData);
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
            <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">

                {/* HEADER */}
                <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-black text-slate-900">Automation Audit</h3>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Step {step} of 2</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                        <X size={20} className="text-slate-500" />
                    </button>
                </div>

                {/* BODY */}
                <div className="p-8">
                    {step === 1 && (
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">What industry are you in?</label>
                                <select
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-slate-700"
                                    value={formData.industry}
                                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                >
                                    <option value="">Select Industry...</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Logistics">Logistics / Supply Chain</option>
                                    <option value="Real Estate">Real Estate</option>
                                    <option value="Legal">Legal / Professional Services</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">What is your biggest manual bottleneck?</label>
                                <textarea
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-slate-700 h-32 resize-none"
                                    placeholder="e.g. Processing invoices, Scheduling appointments, responding to support tickets..."
                                    value={formData.bottleneck}
                                    onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                                />
                            </div>

                            <button
                                onClick={() => setStep(2)}
                                disabled={!formData.industry || !formData.bottleneck}
                                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Next Step <ChevronRight size={18} />
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Estimated Automation Budget</label>
                                <select
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-slate-700"
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                >
                                    <option value="">Select Range...</option>
                                    <option value="< $5k">Under $5k (Starter)</option>
                                    <option value="$5k - $20k">$5k - $20k (Growth)</option>
                                    <option value="$20k+">$20k+ (Enterprise)</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-slate-700"
                                        placeholder="John Doe"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                                    <input
                                        type="email"
                                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-slate-700"
                                        placeholder="john@company.com"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
                            >
                                Get My Audit Report <ArrowRight size={18} />
                            </button>
                        </form>
                    )}

                    {step === 3 && (
                        <div className="text-center py-8">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                                <CheckCircle2 size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">Audit Received!</h3>
                            <p className="text-slate-600 mb-8 max-w-xs mx-auto">
                                Our AI team is analyzing your inputs. We will email your custom automation roadmap to <span className="font-bold text-slate-900">{formData.email}</span> within 24 hours.
                            </p>
                            <button
                                onClick={onClose}
                                className="px-8 py-3 bg-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-300 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default AuditModal;
