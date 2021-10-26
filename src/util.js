//Media Resize // doesn't work with te maj of the API but nevermind...

export const smallImage = (imagePath, size) => {
    const image = imagePath.match(/media\/screenshots/)
        ?
        imagePath.replace("/media/screenshots", `/media/resize/${size}/screenshots`)
        : imagePath.replace('/media/games', `/media/resize/${size}/-/games`);
    return image;
};