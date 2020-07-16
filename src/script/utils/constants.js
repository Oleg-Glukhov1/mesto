export const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
// edit
export const profileEditButton = document.querySelector('.profile__edit-button');
export const editProfile = document.querySelector('.popup_type_edit');
export const popupAuthor = document.querySelector('.popup__text_type_author');
export const popupProfession = document.querySelector('.popup__text_type_profession');
// ADD
export const profileAddButton = document.querySelector('.profile__add-button');
export const addElement = document.querySelector('.popup_type_add');
export const popupPlace = document.querySelector('.popup__text_type_place');
export const popupUrl = document.querySelector('.popup__text_type_url');
// Елементы
export const elements = document.querySelector('.elements');
export const options = {
    formSelector: '.popup__container',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__text_error',
    errorClass: 'popup__error_visible',
};