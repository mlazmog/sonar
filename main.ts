/**
 * Sensor de ultrasonidos:
 * 
 * -Añadir extensión sonar
 * 
 * -En la tarjeta de ampliación cambiar la posición de los "jumpers" de 3v3 o SV
 * 
 * -Conexión
 * 
 *        -echo P1
 * 
 *        -trig P2
 */
/**
 * Miguel Lázaro Moguilnaia
 * 
 * 2ºESO A
 */
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    basic.showNumber(sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    ))
})
