export default function ApplicationLogo({ className = 'h-9 w-auto', ...props }) {
    return (
        <img
            src="/images/omya-invest-logo.png"
            alt="OMYA INVEST"
            draggable={false}
            className={`object-contain ${className}`}
            {...props}
        />
    );
}
