import styles from "./styles.module.scss"

interface ContainerProps {
    title: string;
    items: string[];
}

export const Container: React.FC<ContainerProps> = ({ title, items }) => {
    return (
        <div className={styles.content_container}>
            <h4>{title}</h4>
            <div>
                {items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
};
