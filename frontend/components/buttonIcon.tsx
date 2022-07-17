import cn from 'classnames';

type Props = {
    className?: string;
    children: string;
    icon: JSX.Element;
};

const ButtonIcon: React.FC<Props> = ({
    children,
    icon,
    className,
    ...props
}) => {
    return (
        <button className={cn(className, 'btn-icon')} {...props}>
            <span className='btn-icon__text'>{children}</span>
            {icon}
        </button>
    );
};

export default ButtonIcon;
