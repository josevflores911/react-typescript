export function timeToSec(tempo: string) {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":");

    const hoursToSec = Number(horas) * 3600;
    const minToSec = Number(minutos) * 60;
    return hoursToSec + minToSec + Number(segundos);
}