type RoundedButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function RoundedButton(props: RoundedButtonProps){
    return <button {...props} className={props.className + " font-inter font-medium text-[12px] bg-system px-[16px] py-[10px] rounded-full"}>
        {props.children}
    </button>
}