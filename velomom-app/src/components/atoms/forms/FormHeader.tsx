import React from 'react';

interface FormHeaderProps {
    title: string;
    subtitle: string;
    linkText: string;
    linkHref: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, subtitle, linkText, linkHref }) => {
    return (
        <div className="mb-8">
            <h1 className="text-[57px] leading-[72px] font-bold bg-gradient-to-l from-red300 via-purple300 to-purple500 bg-clip-text text-transparent mb-3">
                {title}
            </h1>
            <h6 className="text-secondary text-xl leading-8 font-medium">
                {subtitle} <a href={linkHref} className="text-purple500 underline underline-offset-1">{linkText}</a>
            </h6>
        </div>
    );
};

export default FormHeader;