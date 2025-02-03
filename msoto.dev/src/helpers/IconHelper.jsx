export function GetIconUri(
    id, color, size = 35, format = "png"
){
    const provider = "https://img.icons8.com/";

    return `${provider}?size=${size}&id=${id}&format=${format}&color=${color}`;
}