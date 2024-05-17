import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const CCTokenTransferModule = buildModule("CCTokenTransferModule", (m) => {

    const ccTokenTranfer = m.contract("CCTokenTransfer");

    return { ccTokenTranfer };
});

export default CCTokenTransferModule;
