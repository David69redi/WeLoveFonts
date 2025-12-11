import { ref } from "vue";
export const toastActive = ref(false)

interface FontData {
    name: string;
    chars: string;

}
export const switchTheme = () => {
    document.body.classList.toggle("dark-theme");
}
export const copiarTexto = async (texto: string) => {
    try {
        await navigator.clipboard.writeText(texto);
    } catch {
        alert("No tengo permiso para copiar el texto");
    }
}

export const mostrarToast = () => {
    toastActive.value = true

    setTimeout(() => {
        toastActive.value = false
    }, 3000)
}

export const handleCopyText = async (textoACopiar: string) => {
    await copiarTexto(textoACopiar)
    mostrarToast()
}


export const toFont = (text: string, toFontName: string, allFonts: FontData[]): string => {

    const normalFont = allFonts.find((f) => f.name.toLowerCase() === "normal");
    const targetFont = allFonts.find(
        (f) => f.name.toLowerCase() === toFontName.toLowerCase()
    );

    if (!normalFont || !targetFont) {
        return text;
    }

    const charMap: { [key: string]: string } = {};
    const normalChars: string[] = Array.from(normalFont.chars);
    const targetChars: string[] = Array.from(targetFont.chars);

    for (let i = 0; i < normalChars.length; i++) {
        const normalChar: string = normalChars[i]!;
        const targetChar: string = targetChars[i] || normalChars[i]!;
        charMap[normalChar] = targetChar;
    }

    const decomposed: string = text.normalize("NFD");

    let result: string = "";
    for (const char of decomposed) {
        if (/[\u0300-\u036f]/.test(char)) {
            result += char;
        } else {
            result += charMap[char] || char;
        }
    }

    return result.normalize("NFC");
};
