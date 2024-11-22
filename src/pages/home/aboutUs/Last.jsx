const Last = () => {
    return (
        <div className="rounded-md bg-white w-[180px] p-4 space-y-3 relative">
            <div className="bg-slate-400 flex gap-7 rounded-sm mt-6">
                <div className="flex gap-1 items-center p-1">
                    <img src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/star.png" alt="star" />
                    <img src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/star.png" alt="star" />
                    <img src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/star.png" alt="star" />
                    <img src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/star.png" alt="star" />
                    <img src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/lightstar.png" alt="star" />
                </div>
                <p className="opacity-70 text-base">4.0</p>
            </div>
            <div className="text-center">
                <h3 className="text-[16px] font-bold">Mark A. Wilson</h3>
                <p className="text-[16px] font-medium opacity-80">Heart Patient</p>
            </div>
            <div className="absolute -top-16 right-8">
                <img src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/thumbstar.png" alt="icon" />
            </div>
        </div>
    );
};

export default Last;