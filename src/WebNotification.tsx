import * as React from 'react';

interface Props {
    title: string;
    icon?: string;
    body?: string;
    timeout?: number;
    ignore: boolean;
    onClickFn?: () => any;
}

interface iOptions {
    title: string;
    icon?: string;
    body?: string;
    timeout?: number;
}

export const WebNotification: React.FC<Props> = ({ title, icon, body, timeout, onClickFn, ignore }) => {
    console.log(title, icon, body, timeout, onClickFn, ignore);
    React.useEffect(() => {
        const showNotification = async () => {
            console.log("first")
            if (ignore) return;
            console.log("second")
            if ('Notification' in window) {
                console.log("third")
                const permission = await Notification.requestPermission();
                console.log("permission:", permission)
                if (permission !== 'granted') return;
                console.log("fourth")
                const options: NotificationOptions = {
                    body,
                    icon
                };

                const notification = new Notification(title, options);

                if (onClickFn) {
                    notification.onclick = (e) => {
                        e.preventDefault()
                        onClickFn();
                        notification.close();
                    };
                }

                setTimeout(() => {
                    notification.close();
                }, timeout || 5000);
            }
        };

        showNotification();
    }, [title, icon, body, timeout, onClickFn, ignore]);

    return null;
};
