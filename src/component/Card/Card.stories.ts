import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta = {
    title: 'UI/Card',
    component: Card,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['available', 'unavailable'] // Можно использовать 'filled' и 'outlined', если это соответствует вашему компоненту
            }
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            }
        },
        imageSrc: {
            control: 'text',
            description: 'URL image on top of Card'
        }
    }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// История для доступной карточки
export const Available: Story = {
    args: {
        variant: 'available',
        size: 'small',
        children: 'This is an available card.'
    },
};

// История для доступной карточки с изображением
export const AvailableImage: Story = {
    args: {
        variant: 'available',
        size: 'small',
        imageSrc: 'https://via.placeholder.com/300', // Замените на актуальный URL изображения
        children: 'This is an available card with an image.'
    },
};

// История для недоступной карточки
export const Unavailable: Story = {
    args: {
        variant: 'unavailable',
        size: 'medium',
        children: 'This is an unavailable card.'
    },
};
