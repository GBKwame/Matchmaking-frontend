

function ApplyComSix({ formData, setFormData,  handleBack, currentSetup, totalSteps }) {

    const handleFileChange = (e) => {
        // Convert the FileList to an Array
        const selectedFiles = Array.from(e.target.files);

        setFormData((prev) => ({
            ...prev,
            // Use the spread operator [...] to keep old photos AND add new ones
            photos: [...prev.photos, ...selectedFiles]
        }));
    };

    const removePhoto = (indexToRemove) => {
        setFormData((prev) => ({
            ...prev,
            // Filter out the photo that matches the clicked index
            photos: prev.photos.filter((_, index) => index !== indexToRemove)
        }));
    };

    return (
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <div className="mb-12">
                <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-mocha/70">
                    <span>Step {currentSetup + 1} of {totalSteps}</span>
                    <span className="text-gold">Share Your Light</span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-champagne/60">
                    <div
                        className="h-full bg-gold transition-all duration-700"
                        style={{ width: "85.7143%" }}
                    />
                </div>
            </div>
            <div className="rounded-[2rem] border border-border bg-ivory p-8 shadow-soft md:p-12">
                <div>
                    <header className="mb-8 text-center">
                        <div className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">
                            Share Your Light
                        </div>
                        <h2 className="mt-3 font-serif text-3xl text-cocoa md:text-4xl">
                            Upload a few photos that reflect who you are.
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-mocha/75">
                            3–6 recent, high-quality photos. Your photos remain completely
                            private.
                        </p>
                    </header>
                    <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gold/50 bg-cream/40 px-6 py-16 text-center transition-colors hover:border-gold hover:bg-cream/60">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-upload h-8 w-8 text-gold"
                            aria-hidden="true"
                        >
                            <path d="M12 3v12" />
                            <path d="m17 8-5-5-5 5" />
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        </svg>
                        <span className="mt-4 font-serif text-xl text-cocoa">
                            {formData.photos.length > 0 ? formData.photos.length : "Upload"}
                        </span>
                        <span className="mt-1 text-xs uppercase tracking-[0.22em] text-mocha/60">
                            PNG · JPG · HEIC
                        </span>
                        <input multiple onChange={handleFileChange} accept="image/*" className="hidden" type="file" />
                    </label>
                    {/* PREVIEW SECTION (Optional but recommended) */}
                    <div className="mt-6 grid grid-cols-3 gap-4">
                        {formData.photos.map((file, index) => (
                            <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-gold/20">
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt="preview"
                                    className="h-full w-full object-cover"
                                />
                                <button
                                    type="button" // Important: keep as type="button" so it doesn't submit the form
                                    onClick={() => removePhoto(index)}
                                    className="absolute top-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white shadow-md transition-transform hover:scale-110 active:scale-90"
                                    title="Remove photo"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 flex items-center justify-between gap-4">
                    <button
                        onClick={handleBack}
                        type="button"
                        className="flex items-center gap-2 rounded-full border border-mocha/30 px-5 py-2.5 text-sm text-cocoa transition-colors hover:border-gold hover:text-gold disabled:opacity-40"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-left h-4 w-4"
                            aria-hidden="true"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>{" "}
                        Back
                    </button>
                    <button
                        type="submit"
                        className="flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-medium text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
                    >
                        Submit Application{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-check h-4 w-4"
                            aria-hidden="true"
                        >
                            <path d="M20 6 9 17l-5-5" />
                        </svg>
                    </button>
                </div>
            </div>
            <p className="mt-8 text-center text-xs uppercase tracking-[0.22em] text-mocha/60">
                Private · Verified · Handpicked
            </p>
        </div>

    )
}

export default ApplyComSix
