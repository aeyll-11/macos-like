export default interface BatteryManager extends EventTarget {
    charging: false;
    chargingTime: typeof Infinity;
    dischargingTime: number;
    level: number;
}

export default interface Battery extends Navigator {
    getBattery: () => Promise<BatteryManager>;
}