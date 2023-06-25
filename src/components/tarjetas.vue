<template>
    <div class="container">
        <div class="row justify-content-center">

            <div class="text-center">
                <button type="button" class="btn btn-lg btn-outline-success col-3 m-2">Total Saldos: {{ totalSaldos() }}
                    ETH</button>
            </div>

            <div class="card text-white text-center bg-dark m-2" style="max-width: 18rem;">
                <div class="card-header">Meta:</div>
                <div class="card-body">
                    <h5 class="card-title"> {{ totalMeta() }} ETH</h5>
                </div>
            </div>
            <div class="card text-white text-center bg-dark m-2" style="max-width: 18rem;">
                <div class="card-header">Lns: </div>
                <div class="card-body">
                    <h5 class="card-title">{{ totalLns() }} ETH</h5>
                </div>
            </div>
            <div class="card text-white text-center bg-dark m-2" style="max-width: 18rem;">
                <div class="card-header">Lnx: </div>
                <div class="card-body">
                    <h5 class="card-title">{{ totalLnx() }} ETH</h5>
                </div>
            </div>
            <div class="card text-white text-center bg-dark m-2" style="max-width: 18rem;">
                <div class="card-header">Duran777: </div>
                <div class="card-body">
                    <h5 class="card-title">{{ totalDuran777() }} ETH</h5>
                </div>
            </div>
            <div class="card text-white text-center bg-dark m-2" style="max-width: 18rem;">
                <div class="card-header">Alcatrazuno: </div>
                <div class="card-body">
                    <h5 class="card-title">{{ totalAlcatrazuno() }} ETH</h5>
                </div>
            </div>
            <div class="card text-white text-center bg-dark m-2" style="max-width: 18rem;">
                <div class="card-header">Match:</div>
                <div class="card-body">
                    <h5 class="card-title"> {{ totalMatch() }} ETH</h5>
                </div>
            </div>

            <div class="mb-5 divider"></div>

            <div class="card col-12 col-md-4 bg-dark m-2" style="max-width: 22rem;" v-for="(iten, index) in items"
                :key="index">
                <div class="card-body">
                    <h5 class="card-title text-white">
                        Saldos {{ iten.name }}
                        <span style="font-size: .6rem;" :class="{
                            'badge rounded-pill bg-success': iten.status === 'Sync',
                            'badge rounded-pill bg-secondary': iten.status === 'Off',
                        }"> {{ iten.status }}
                        </span>
                    </h5>
                    <p class="card-text">Meta: {{ iten.meta }} ETH</p>
                    <p class="card-text">Lns: {{ iten.Lns }} ETH</p>
                    <p class="card-text">Lnx: {{ iten.Lnx }} ETH</p>
                    <p class="card-text">Duran777: {{ iten.Duran777 }} ETH</p>
                    <p class="card-text">Alcatrazuno: {{ iten.Alcatrazuno }} ETH</p>
                    <p class="card-text">Match: {{ iten.Match }} ETH</p>
                    <p style="font-size: 1.3rem; color: #D5D5D5;">Total: {{ totalBalance(iten) }} ETH</p>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Ethbalance from '../assets/archjson/ethbalance.json'

export default {
    name: "Tarjeta",
    data() {
        return {
            items: Ethbalance,

            address1: "0x3ec5B42376BFbE988cC619a0aCFE68049d4fb9bC",
            address2: "0xef6EbD32d53285710345DF899B3A6758F037c313",
            address3: "0x4dfB4e25Ede5a1d5052a530e0Cf4378Cb1168AF2",
            address4: "0x19c0Ff8fCdEE0519A59b9A6cB82e6805a2B747bA",
            address5: "0x860f54fFF9cDD80A62E9CeE7E3B94392D0f90c74",
            address6: "0xaC1d7b8A727Eab1D4bc2A4db3D97f249F7c9bC94",
        }
    },
    async created() {

        // Red Ethereum network
        const web3 = new Web3("https://mainnet.infura.io/v3/2aeb83f4097646f78b875e16596bc803");

        try {
            const [meta, Lns, Lnx, Duran777, Alcatrazuno, Match] = await Promise.all([
                web3.eth.getBalance(this.address1),
                web3.eth.getBalance(this.address2),
                web3.eth.getBalance(this.address3),
                web3.eth.getBalance(this.address4),
                web3.eth.getBalance(this.address5),
                web3.eth.getBalance(this.address6),

            ]);

            this.items[0].meta = parseFloat(web3.utils.fromWei(meta, "ether")).toFixed(5);
            this.items[0].Lns = parseFloat(web3.utils.fromWei(Lns, "ether")).toFixed(5);
            this.items[0].Lnx = parseFloat(web3.utils.fromWei(Lnx, "ether")).toFixed(5);
            this.items[0].Duran777 = parseFloat(web3.utils.fromWei(Duran777, "ether")).toFixed(5);
            this.items[0].Alcatrazuno = parseFloat(web3.utils.fromWei(Alcatrazuno, "ether")).toFixed(5);
            this.items[0].Match = parseFloat(web3.utils.fromWei(Match, "ether")).toFixed(5);

        } catch (error) {
            console.log(error);
        }

        //Red Arbitrum
        const web3arb = new Web3("https://arb1.arbitrum.io/rpc");

        try {
            const [meta, Lns, Lnx, Duran777, Alcatrazuno, Match] = await Promise.all([
                web3arb.eth.getBalance(this.address1),
                web3arb.eth.getBalance(this.address2),
                web3arb.eth.getBalance(this.address3),
                web3arb.eth.getBalance(this.address4),
                web3arb.eth.getBalance(this.address5),
                web3arb.eth.getBalance(this.address6),

            ]);

            this.items[1].meta = parseFloat(web3arb.utils.fromWei(meta, "ether")).toFixed(5);
            this.items[1].Lns = parseFloat(web3arb.utils.fromWei(Lns, "ether")).toFixed(5);
            this.items[1].Lnx = parseFloat(web3arb.utils.fromWei(Lnx, "ether")).toFixed(5);
            this.items[1].Duran777 = parseFloat(web3arb.utils.fromWei(Duran777, "ether")).toFixed(5);
            this.items[1].Alcatrazuno = parseFloat(web3arb.utils.fromWei(Alcatrazuno, "ether")).toFixed(5);
            this.items[1].Match = parseFloat(web3arb.utils.fromWei(Match, "ether")).toFixed(5);

        } catch (error) {
            console.log(error);
        }

        //Red Optimism
        const web3op = new Web3("https://mainnet.optimism.io");

        try {
            const [meta, Lns, Lnx, Duran777, Alcatrazuno, Match] = await Promise.all([
                web3op.eth.getBalance(this.address1),
                web3op.eth.getBalance(this.address2),
                web3op.eth.getBalance(this.address3),
                web3op.eth.getBalance(this.address4),
                web3op.eth.getBalance(this.address5),
                web3op.eth.getBalance(this.address6),

            ]);

            this.items[2].meta = parseFloat(web3op.utils.fromWei(meta, "ether")).toFixed(5);
            this.items[2].Lns = parseFloat(web3op.utils.fromWei(Lns, "ether")).toFixed(5);
            this.items[2].Lnx = parseFloat(web3op.utils.fromWei(Lnx, "ether")).toFixed(5);
            this.items[2].Duran777 = parseFloat(web3op.utils.fromWei(Duran777, "ether")).toFixed(5);
            this.items[2].Alcatrazuno = parseFloat(web3op.utils.fromWei(Alcatrazuno, "ether")).toFixed(5);
            this.items[2].Match = parseFloat(web3op.utils.fromWei(Match, "ether")).toFixed(5);

        } catch (error) {
            console.log(error);
        }

        //Red ZKsync era.
        const web3zk = new Web3("https://mainnet.era.zksync.io");

        try {
            const [meta, Lns, Lnx, Duran777, Alcatrazuno, Match] = await Promise.all([
                web3zk.eth.getBalance(this.address1),
                web3zk.eth.getBalance(this.address2),
                web3zk.eth.getBalance(this.address3),
                web3zk.eth.getBalance(this.address4),
                web3zk.eth.getBalance(this.address5),
                web3zk.eth.getBalance(this.address6),

            ]);

            this.items[3].meta = parseFloat(web3zk.utils.fromWei(meta, "ether")).toFixed(5);
            this.items[3].Lns = parseFloat(web3zk.utils.fromWei(Lns, "ether")).toFixed(5);
            this.items[3].Lnx = parseFloat(web3zk.utils.fromWei(Lnx, "ether")).toFixed(5);
            this.items[3].Duran777 = parseFloat(web3zk.utils.fromWei(Duran777, "ether")).toFixed(5);
            this.items[3].Alcatrazuno = parseFloat(web3zk.utils.fromWei(Alcatrazuno, "ether")).toFixed(5);
            this.items[3].Match = parseFloat(web3zk.utils.fromWei(Match, "ether")).toFixed(5);

        } catch (error) {
            console.log(error);
        }

        //Red ZKevm polygon.
        const web3zkevm = new Web3("https://zkevm-rpc.com");

        try {
            const [meta, Lns, Lnx, Duran777, Alcatrazuno, Match] = await Promise.all([
                web3zkevm.eth.getBalance(this.address1),
                web3zkevm.eth.getBalance(this.address2),
                web3zkevm.eth.getBalance(this.address3),
                web3zkevm.eth.getBalance(this.address4),
                web3zkevm.eth.getBalance(this.address5),
                web3zkevm.eth.getBalance(this.address6),

            ]);

            this.items[4].meta = parseFloat(web3zkevm.utils.fromWei(meta, "ether")).toFixed(5);
            this.items[4].Lns = parseFloat(web3zkevm.utils.fromWei(Lns, "ether")).toFixed(5);
            this.items[4].Lnx = parseFloat(web3zkevm.utils.fromWei(Lnx, "ether")).toFixed(5);
            this.items[4].Duran777 = parseFloat(web3zkevm.utils.fromWei(Duran777, "ether")).toFixed(5);
            this.items[4].Alcatrazuno = parseFloat(web3zkevm.utils.fromWei(Alcatrazuno, "ether")).toFixed(5);
            this.items[4].Match = parseFloat(web3zkevm.utils.fromWei(Match, "ether")).toFixed(5);

        } catch (error) {
            console.log(error);
        }

        /********************Copiar y anadir nueva red*********************************************
                //Red xxx.
        const web3xx = new Web3("https://xxx");
        
                try {
                    const [meta, Lns] = await Promise.all([
                        web3xx.eth.getBalance(this.address1),
                        web3xx.eth.getBalance(this.address2),
                        web3xx.eth.getBalance(this.address3),
                        web3xx.eth.getBalance(this.address4),
                        web3xx.eth.getBalance(this.address5),
                        web3xx.eth.getBalance(this.address6),
        
                    ]);
        
                    this.items[x].meta = parseFloat(web3xx.utils.fromWei(meta, "ether")).toFixed(5);
                    this.items[x].Lns = parseFloat(web3xx.utils.fromWei(Lns, "ether")).toFixed(5);
                    this.items[x].Lnx = parseFloat(web3xx.utils.fromWei(Lnx, "ether")).toFixed(5);
                    this.items[x].Duran777 = parseFloat(web3xx.utils.fromWei(Duran777, "ether")).toFixed(5);
                    this.items[x].Alcatrazuno = parseFloat(web3xx.utils.fromWei(Alcatrazuno, "ether")).toFixed(5);
                    this.items[x].Match = parseFloat(web3xx.utils.fromWei(Match, "ether")).toFixed(5);
        
                } catch (error) {
                    console.log(error);
                }
        *******************************************************************************************/

        //Red polygon network (Weth)
        const wethAddress = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"; // Dirección del contrato WETH en la red Polygon
        const wethAbi = [
            {
                constant: true,
                inputs: [],
                name: "decimals",
                outputs: [{ name: "", type: "uint8" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "", type: "address" }],
                name: "balanceOf",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            }
        ];

        const web3Polygon = new Web3("https://polygon-rpc.com");
        const wethContract = new web3Polygon.eth.Contract(wethAbi, wethAddress);

        try {
            const [meta, Lns, Lnx, Duran777, Alcatrazuno, Match] = await Promise.all([
                wethContract.methods.balanceOf(this.address1).call(),
                wethContract.methods.balanceOf(this.address2).call(),
                wethContract.methods.balanceOf(this.address3).call(),
                wethContract.methods.balanceOf(this.address4).call(),
                wethContract.methods.balanceOf(this.address5).call(),
                wethContract.methods.balanceOf(this.address6).call(),
                // Añadir más llamadas a balanceOf para más direcciones
            ]);

            // Convertir el saldo de WETH de wei a ether (con 18 decimales) y redondear a 5 decimales
            this.items[5].meta = parseFloat(web3Polygon.utils.fromWei(meta, "ether")).toFixed(5);
            this.items[5].Lns = parseFloat(web3Polygon.utils.fromWei(Lns, "ether")).toFixed(5);
            this.items[5].Lnx = parseFloat(web3Polygon.utils.fromWei(Lnx, "ether")).toFixed(5);
            this.items[5].Duran777 = parseFloat(web3Polygon.utils.fromWei(Duran777, "ether")).toFixed(5);
            this.items[5].Alcatrazuno = parseFloat(web3Polygon.utils.fromWei(Alcatrazuno, "ether")).toFixed(5);
            this.items[5].Match = parseFloat(web3Polygon.utils.fromWei(Match, "ether")).toFixed(5);
            // Actualizar más propiedades para más direcciones

        } catch (error) {
            console.log(error);
        }

        //Red Binance smart chain (Weth)
        const wethAddressBsc = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"; // Dirección del contrato WETH en la red bsc
        const wethAbiBsc = [
            {
                constant: true,
                inputs: [],
                name: "decimals",
                outputs: [{ name: "", type: "uint8" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "", type: "address" }],
                name: "balanceOf",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            }
        ];

        const web3Bsc = new Web3("https://bsc-dataseed1.binance.org");
        const wethContractBsc = new web3Bsc.eth.Contract(wethAbiBsc, wethAddressBsc);

        try {
            const [meta, Lns, Lnx, Duran777, Alcatrazuno, Match] = await Promise.all([
                wethContractBsc.methods.balanceOf(this.address1).call(),
                wethContractBsc.methods.balanceOf(this.address2).call(),
                wethContractBsc.methods.balanceOf(this.address3).call(),
                wethContractBsc.methods.balanceOf(this.address4).call(),
                wethContractBsc.methods.balanceOf(this.address5).call(),
                wethContractBsc.methods.balanceOf(this.address6).call(),
                // Añadir más llamadas a balanceOf para más direcciones
            ]);

            // Convertir el saldo de WETH de wei a ether (con 18 decimales) y redondear a 5 decimales
            this.items[8].meta = parseFloat(web3Bsc.utils.fromWei(meta, "ether")).toFixed(5);
            this.items[8].Lns = parseFloat(web3Bsc.utils.fromWei(Lns, "ether")).toFixed(5);
            this.items[8].Lnx = parseFloat(web3Bsc.utils.fromWei(Lnx, "ether")).toFixed(5);
            this.items[8].Duran777 = parseFloat(web3Bsc.utils.fromWei(Duran777, "ether")).toFixed(5);
            this.items[8].Alcatrazuno = parseFloat(web3Bsc.utils.fromWei(Alcatrazuno, "ether")).toFixed(5);
            this.items[8].Match = parseFloat(web3Bsc.utils.fromWei(Match, "ether")).toFixed(5);
            // Actualizar más propiedades para más direcciones

        } catch (error) {
            console.log(error);
        }

    },

    methods: {
        //Balance total de cada tarjeta
        totalBalance(item) {
            const metaBalance = parseFloat(item.meta) || 0;
            const LnsBalance = parseFloat(item.Lns) || 0;
            const LnxBalance = parseFloat(item.Lnx) || 0;
            const Duran777Balance = parseFloat(item.Duran777) || 0;
            const AlcatrazunoBalance = parseFloat(item.Alcatrazuno) || 0;
            const MatchBalance = parseFloat(item.Match) || 0;
            const total = metaBalance + LnsBalance + LnxBalance + Duran777Balance + AlcatrazunoBalance + MatchBalance;
            return total.toFixed(3);
        },
        //Balance total de la wallet Meta
        totalMeta() {
            let sum = 0;
            for (let i = 0; i < this.items.length; i++) {
                const item = this.items[i];
                const meta = parseFloat(item.meta) || 0;
                sum += meta;
            }
            return sum.toFixed(3);
        },
        //Balance total de la wallet Lns
        totalLns() {
            let sum = 0;
            for (let i = 0; i < this.items.length; i++) {
                const item = this.items[i];
                const lns = parseFloat(item.Lns) || 0;
                sum += lns;
            }
            return sum.toFixed(3);
        },
        totalLnx() {
            let sum = 0;
            for (let i = 0; i < this.items.length; i++) {
                const item = this.items[i];
                const lnx = parseFloat(item.Lnx) || 0;
                sum += lnx;
            }
            return sum.toFixed(3);
        },
        totalDuran777() {
            let sum = 0;
            for (let i = 0; i < this.items.length; i++) {
                const item = this.items[i];
                const Duran777 = parseFloat(item.Duran777) || 0;
                sum += Duran777;
            }
            return sum.toFixed(3);
        },
        totalAlcatrazuno() {
            let sum = 0;
            for (let i = 0; i < this.items.length; i++) {
                const item = this.items[i];
                const Alcatrazuno = parseFloat(item.Alcatrazuno) || 0;
                sum += Alcatrazuno;
            }
            return sum.toFixed(3);
        },
        totalMatch() {
            let sum = 0;
            for (let i = 0; i < this.items.length; i++) {
                const item = this.items[i];
                const Match = parseFloat(item.Match) || 0;
                sum += Match;
            }
            return sum.toFixed(3);
        },

        //Balance total de todas las wallets
        totalSaldos() {
            const totalMeta = parseFloat(this.totalMeta()) || 0;
            const totalLns = parseFloat(this.totalLns()) || 0;
            const totalLnx = parseFloat(this.totalLnx()) || 0;
            const totalDuran777 = parseFloat(this.totalDuran777()) || 0;
            const totalAlcatrazuno = parseFloat(this.totalAlcatrazuno()) || 0;
            const totalMatch = parseFloat(this.totalMatch()) || 0;
            return (totalMeta + totalLns + totalLnx + totalDuran777 + totalAlcatrazuno + totalMatch).toFixed(3);
        },
    },
}
</script>

<style scoped>
.card-color-green {
    background-color: rgb(100, 211, 128);
}
</style>