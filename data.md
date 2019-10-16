{ 
name: 'Prius', 
brand: “Toyota”, 
price: 20000, 
year: ‘2016’,
condition: ’Used’,
carTypes: ['sedan’, ‘hybrid’], 
images: [이미지 5개 이상],
transmission: ‘Automatic’,
fuel: ‘Gasoline’,
fuelEconomy: 18,
displacement: 2833, // 배기량은 자동차 등록할 때 Auto fill, 허나 수정 가능
color: ‘White’,
taxPaid: true | false // false 시 license Plate text input은 disabled
licensePlate: ‘1RX-2348’ | null
extCondition: ‘None’ | ’Small’ | ‘Medium’ | 'High' | ’Serious’
options: {
main: {
navigation: true,
blackbox: false,
smartKey: true,
rearSensor: true,
rearCamera: false,
usb: true,
bluetooth: true,
aux: true,
}blaswan123456

        exteriorAndBuiltIn: {
            sunRoof: true,
            headLight: 'halogen' | 'HID' | 'LED',
            powerTailgateTrunk: true,

        }
    	backSeatAVMonitor: false,
    	cdPlayer: true,

        seat: {
            leatherSeat: true,
            electricFrontSeat: true,
            electricBackSeat: false,
            heatingSeat: false,
            memoryFrontSeat: false,
            coolingSeat: false,

        }

}
