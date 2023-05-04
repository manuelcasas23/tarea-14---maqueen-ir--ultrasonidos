input.onButtonPressed(Button.A, function () {
    basic.showString("TAREA")
    basic.pause(500)
    basic.showString("ALUMNO")
    basic.pause(500)
    basic.showString("CURSO")
})
basic.forever(function () {
    if (IR.IR_read() == 17) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    } else if (IR.IR_read() == 18) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 40)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    } else if (IR.IR_read() == 19) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 25)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    } else if (IR.IR_read() == 20) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    } else if (IR.IR_read() == 21) {
        music.playTone(698, music.beat(BeatFraction.Eighth))
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    }
})
basic.forever(function () {
    basic.showNumber(IR.IR_read())
})
