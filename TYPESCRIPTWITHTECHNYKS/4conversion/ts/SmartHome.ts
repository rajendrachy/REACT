// enum DeviceStatus {
//     On,
//     Off,
//     Standby
//   }
  
//   type SmartDevice = [string, string, DeviceStatus];
  
//   function toggleDeviceStatus(device: SmartDevice, newStatus: DeviceStatus): SmartDevice {
//     const current = device[2];
//     if ((current === DeviceStatus.Off && newStatus === DeviceStatus.Standby) ||
//         (current === DeviceStatus.Standby && newStatus === DeviceStatus.Off)) {
//       return device;
//     }
//     device[2] = newStatus;
//     return device;
//   }
  



//   const d1: SmartDevice = ['Light', 'LED', DeviceStatus.On];
//   const d2: SmartDevice = ['Fan', 'Ceiling', DeviceStatus.Off];
//   const d3: SmartDevice = ['Thermostat', 'Digital', DeviceStatus.Standby];
  
//   console.log(toggleDeviceStatus(d1, DeviceStatus.Standby));
//   console.log(toggleDeviceStatus(d2, DeviceStatus.Standby)); // Invalid transition
//   console.log(toggleDeviceStatus(d3, DeviceStatus.On));
  

