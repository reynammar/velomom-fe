
interface ButtonProps {
    variant: string;
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({variant, children}) => {
    return(
        <button className={`w-full py-3 px-6 ${variant} text-white rounded-2xl hover:bg-[#6d4d83]`}>
            {children}
        </button>
    );
}

export default Button