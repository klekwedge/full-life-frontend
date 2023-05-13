import { NavItem } from "../types";

export const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Пример 1",
        children: [
            {
                label: "Пример _1",
                subLabel: "Пример _1_1",
                href: "#",
            },
            {
                label: "Пример _1",
                subLabel: "Пример _1_2",
                href: "#",
            },
        ],
    },
    {
        label: "Пример 2",
        children: [
            {
                label: "Пример _2",
                subLabel: "Пример _2_1",
                href: "#",
            },
            {
                label: "Пример _2",
                subLabel: "Пример _2_2",
                href: "#",
            },
        ],
    },
    {
        label: "Пример 3",
        href: "#",
    },
    {
        label: "Пример 4",
        href: "#",
    },
];
