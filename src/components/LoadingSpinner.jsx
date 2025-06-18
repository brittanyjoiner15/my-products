const LoadingSpinner = () => {
    return (
        <div className="loading-container">
            <div className="loading-spinner">
                <div className="spinner-segment"></div>
                <div className="spinner-segment"></div>
                <div className="spinner-segment"></div>
            </div>
            <p className="loading-text">Finding experts...</p>
        </div>
    );
};

export default LoadingSpinner;
