"use client";
import Modal from "@/ui/Modal";
import { X } from "lucide-react";
import { useState } from "react";

const availableLanguages = [
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Japanese",
  "Korean",
  "Chinese",
  "Arabic",
  "Russian",
];

export default function CreateGroupModal({ onClose, isOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    language: "",
    level: "",
    duration: "45",
    people: "unlimited",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const levels = ["Beginner", "Intermediate", "Advanced"];
  const durations = ["30", "45", "60", "90", "unlimited"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Group created:", formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-4 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Create Language Group</h2>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 hover:cursor-pointer hover:bg-slate-800"
          >
            <X className="size-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-xs font-medium text-slate-300"
            >
              Group Name
            </label>
            <input
              onChange={handleInputChange}
              name="name"
              id="name"
              value={formData.name}
              placeholder="e,g. Spanish conversation circle"
              autoFocus={true}
              className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm transition-colors outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-1.5 block text-xs font-medium text-slate-300"
            >
              Description
            </label>
            <textarea
              onChange={handleInputChange}
              name="description"
              id="description"
              value={formData.description}
              placeholder="Describe your language group..."
              rows={3}
              className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm transition-colors outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div>
            <label
              htmlFor="language"
              className="mb-1.5 block text-xs font-medium text-slate-300"
            >
              Language
            </label>
            <select
              onChange={handleInputChange}
              name="language"
              id="language"
              value={formData.language}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm transition-colors outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            >
              <option value="">Select language</option>
              {availableLanguages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label
                htmlFor="level"
                className="mb-1.5 block text-xs font-medium text-slate-300"
              >
                Level
              </label>
              <select
                onChange={handleInputChange}
                name="level"
                id="level"
                value={formData.level}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm transition-colors outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="">Select</option>
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="duration"
                className="mb-1.5 block text-xs font-medium text-slate-300"
              >
                Duration
              </label>
              <select
                onChange={handleInputChange}
                name="duration"
                htmlFor="duration"
                value={formData.duration}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm transition-colors outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              >
                {durations.map((dur) => (
                  <option key={dur} value={dur}>
                    {dur === "unlimited" ? "Unlimited" : `${dur}m`}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="people"
                className="mb-1.5 block text-xs font-medium text-slate-300"
              >
                Max People
              </label>
              <select
                onChange={handleInputChange}
                name="people"
                id="people"
                value={formData.people}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm transition-colors outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="unlimited">Unlimited</option>
                {Array.from({ length: 10 }).map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              className="flex-1 cursor-pointer rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-700"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 cursor-pointer rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Create Group
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
