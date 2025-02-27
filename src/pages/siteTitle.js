import { useEffect } from "react";

export default function SiteTitle({ title }) {
    useEffect(() => {
        document.title = title + ' | Order Management';
    }, [title]);

    return null;
}
