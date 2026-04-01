export const COURSE_DATA = {
  title: "Blockchain Technologies: Business Innovation & Application",
  subtitle: "MIT Sloan–Caliber Curriculum",
  meta: "3 weeks · 12–15 hrs/week · 10 modules · 7 assessments · 1 final project",
  weeks: [
    {
      id: 1,
      title: "Foundations & economic logic",
      hours: "12–14 hrs",
      theme: "Understanding what blockchain is, why it matters economically, and how it works under the hood.",
      colorVar: "green",
      modules: [
        {
          id: "M1",
          title: "The blockchain proposition",
          time: "3.5 hrs",
          overview: "This module traces the history of trust in commerce — from Mesopotamian clay tablets and Florentine double-entry bookkeeping through the cypherpunk movement to Satoshi Nakamoto's whitepaper. You'll learn the Catalini & Gans framework for evaluating blockchain's economic value, understand when distributed ledgers outperform traditional databases, and analyse why intermediaries exist and when blockchain can displace them.",
          topics: [
            "History of digital trust: from double-entry bookkeeping to Bitcoin",
            "The cypherpunk lineage: DigiCash, Hashcash, b-money, Bit Gold",
            "Satoshi Nakamoto's whitepaper — combining existing building blocks",
            "The Catalini & Gans framework: cost of verification and cost of networking",
            "Distributed ledger vs traditional database — a decision framework",
            "Why intermediaries exist: information asymmetry, coordination failure, enforcement",
            "When blockchain adds value vs when it doesn't"
          ],
          lectureContent: [
            {
              heading: "The ledger as civilisation's backbone",
              body: "Around 3000 BCE, Mesopotamian merchants pressed cuneiform into clay tablets to record grain transactions. The ledger became the foundational technology of commerce. But single-entry ledgers had a fatal flaw: one party could alter records with no way to detect it.\n\nThe breakthrough came in 13th-century Florence. Luca Pacioli formalised double-entry bookkeeping in 1494: every transaction recorded twice — as a debit and a credit. If the books don't balance, something is wrong. This didn't eliminate fraud, but it made fraud detectable. Double-entry bookkeeping enabled the modern corporation — you couldn't have joint-stock companies, banks, or global trade without reliable financial records."
            },
            {
              heading: "The double-spend problem",
              body: "When commerce moved online in the 1990s, a new trust problem emerged: the double-spend problem. Physical cash can only be in one place at a time. But digital information can be copied infinitely. How do you stop someone from sending the same digital money to two people simultaneously?\n\nFor three decades, the answer was trusted intermediaries — Visa, Mastercard, banks, PayPal. They maintain the 'true' ledger and verify funds haven't been spent twice. This works, but comes with costs: transaction fees, processing delays, exclusion of the unbanked, single points of failure, and enormous concentrations of data and power."
            },
            {
              heading: "The cypherpunk lineage",
              body: "Before Bitcoin, several attempts were made to solve digital trust without intermediaries:\n\n• David Chaum's DigiCash (1989) — blind signatures for anonymous digital payments. Elegant cryptography, but required a central authority. Bankrupt by 1998.\n\n• Adam Back's Hashcash (1997) — computational puzzles (proof-of-work) to prevent email spam. The core idea — make frivolous actions expensive — became central to Bitcoin.\n\n• Wei Dai's b-money (1998) and Nick Szabo's Bit Gold (1998) — both proposed decentralised digital currencies using proof-of-work. Neither was implemented, but both are directly cited by Nakamoto.\n\n• BitTorrent (2001) — demonstrated that peer-to-peer networks could distribute files without a central server, proving decentralised systems could scale."
            },
            {
              heading: "The Bitcoin whitepaper (October 31, 2008)",
              body: "During the global financial crisis — Lehman Brothers collapsed, trust in banks shattered, governments bailing out institutions 'too big to fail' — Satoshi Nakamoto published a 9-page paper: 'Bitcoin: A Peer-to-Peer Electronic Cash System.'\n\nThe genius wasn't any single cryptographic innovation. Nakamoto's breakthrough was combining existing building blocks — hash functions, public-key cryptography, proof-of-work, peer-to-peer networking, and Merkle trees — into a system where strangers could transact directly, without trusting each other or any intermediary.\n\nOn January 3, 2009, Nakamoto mined the genesis block (Block 0). Embedded in it was a Times newspaper headline about a bank bailout — a timestamp and a philosophical statement about why the system needed to exist."
            },
            {
              heading: "The Catalini & Gans framework",
              body: "Professor Christian Catalini and Professor Joshua Gans argue that blockchain's economic significance reduces to two costs:\n\nCost of Verification — the cost of confirming transaction attributes (identity, ownership, legitimacy) without a trusted intermediary. Example: a university degree on blockchain can be instantly verified by an employer — no registrar, no verification service, no fees.\n\nCost of Networking — the cost of operating a marketplace without a powerful intermediary extracting rents. Example: Uniswap facilitates billions in trading with no company controlling the order book.\n\nKey nuance: blockchain reduces verification costs for digital records, but doesn't solve the 'oracle problem' — guaranteeing the initial link between a digital record and the physical world."
            },
            {
              heading: "Distributed ledgers vs traditional databases",
              body: "Use a traditional database when: a single organisation controls the data, speed is paramount, data needs frequent updates or deletions, privacy is critical, or participants trust a central authority.\n\nUse blockchain when: multiple parties who don't fully trust each other need to share data, immutability matters, disintermediation creates value, programmable logic should execute automatically, or provenance tracking is critical.\n\nHeuristic from MIT Digital Currency Initiative: if you can solve the problem by putting one trusted party in charge of a database, you probably should. Blockchain solves problems where that trusted party doesn't exist, shouldn't exist, or costs too much."
            },
            {
              heading: "Why intermediaries exist",
              body: "Intermediaries solve three problems:\n\n1. Information asymmetry — buyers and sellers don't have equal information. Banks assess credit, insurers evaluate risk, auditors verify statements.\n\n2. Coordination failure — it's hard to cooperate without someone in charge. Exchanges match buyers/sellers, clearinghouses settle trades, payment networks move money.\n\n3. Enforcement — agreements need teeth. Courts enforce contracts, escrow agents hold funds, regulators ensure compliance.\n\nBlockchain offers alternatives: transparent on-chain records reduce asymmetry, consensus mechanisms enable coordination, smart contracts automate enforcement. The question is never 'can blockchain replace intermediaries?' — it's 'for which specific functions does the alternative offer lower cost, higher speed, or reduced rent extraction?'"
            }
          ],
          caseStudy: {
            title: "Bitcoin's genesis block vs Visa",
            sections: [
              {
                heading: "Visa: the centralised trust machine",
                body: "Founded 1958. Processes ~65,000 TPS at peak. Over $14 trillion in annual payment volume. Transactions authorise in 1-2 seconds but fully settle in 1-3 business days. Merchants pay approximately 1.5-3.5% per transaction. Built on trust in Visa as centralised authority — Visa maintains the ledger, sets rules, resolves disputes.\n\nStrengths: massive throughput, global acceptance, consumer protection (chargebacks), regulatory compliance.\n\nWeaknesses: high merchant fees, settlement lag, exclusion of 1.4 billion unbanked adults, single point of control."
              },
              {
                heading: "Bitcoin: the trustless alternative",
                body: "Processes ~7 TPS on base layer. 10-minute block intervals, probabilistic finality after ~60 minutes. Variable fees. No central authority — no one can freeze accounts, reverse transactions, or change rules without network consensus. Maintained by thousands of nodes globally.\n\nStrengths: no intermediary, censorship-resistant, borderless, 24/7, accessible to anyone with internet.\n\nWeaknesses: low throughput, energy consumption (PoW), price volatility, irreversible transactions, regulatory uncertainty."
              },
              {
                heading: "The key insight",
                body: "Bitcoin and Visa aren't competing for the same use case today. But blockchain's design principles — trustless verification, distributed consensus, programmable money — are being absorbed into the broader financial infrastructure. JPMorgan's Kinexys, Visa's own stablecoin pilots, and DTCC's tokenisation initiative all borrow from blockchain architecture. The real story isn't Bitcoin vs Visa — it's how blockchain principles are reshaping the infrastructure that Visa itself runs on."
              }
            ],
            discussionQuestions: [
              "Given your experience with CHAPS/BACS/RTGS settlement, where did you see verification costs that blockchain could reduce?",
              "Think about cross-border payments. Which intermediaries exist primarily because of trust deficits — and could blockchain make any unnecessary?",
              "If advising a fintech startup on blockchain vs traditional database, what three questions would you ask first?"
            ]
          },
          readings: [
            { title: "Catalini & Gans (2020) 'Some Simple Economics of the Blockchain'", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2874598" },
            { title: "Nakamoto (2008) Bitcoin Whitepaper", url: "https://bitcoin.org/bitcoin.pdf" },
            { title: "Iansiti & Lakhani (2017) 'The Truth About Blockchain' (HBR)", url: "" }
          ],
          keyFramework: {
            title: "Catalini & Gans cost matrix",
            rows: [
              { label: "Low verification + Low networking", value: "Blockchain sweet spot — full disintermediation possible" },
              { label: "High verification + Low networking", value: "Blockchain helps with trust, still needs intermediary" },
              { label: "Low verification + High networking", value: "Traditional systems may be more efficient" },
              { label: "High verification + High networking", value: "No strong case for blockchain" }
            ]
          },
          assessment: {
            type: "quiz",
            title: "Module 1 quiz — 15 questions",
            passingScore: 80,
            questions: [
              { q: "What fundamental problem did double-entry bookkeeping solve that is relevant to blockchain's design?", options: ["It eliminated the need for auditors entirely", "It made fraudulent alterations detectable by requiring every transaction to be recorded as both a debit and a credit", "It enabled digital transactions for the first time", "It removed the need for trust between trading parties"], answer: 1, explanation: "Double-entry bookkeeping made fraud detectable (not impossible) by recording every transaction twice. If debits don't equal credits, manipulation is evident. This principle of 'detectable integrity' is foundational to blockchain's immutable ledger design." },
              { q: "The 'double-spend problem' refers to:", options: ["The risk that a bank charges a customer twice", "The possibility of copying digital information to send the same digital money to two recipients", "The problem of overspending on credit cards", "The cost of processing a payment through two intermediaries"], answer: 1, explanation: "Unlike physical cash which can only be in one place, digital data can be copied infinitely. The double-spend problem is the core challenge of digital currency: preventing someone from sending the same digital token to multiple recipients." },
              { q: "Which was NOT a direct precursor technology in Bitcoin's intellectual lineage?", options: ["Hashcash (proof-of-work for spam prevention)", "Merkle trees (efficient data verification)", "TCP/IP (internet protocol)", "Public-key cryptography"], answer: 2, explanation: "While Bitcoin runs over TCP/IP, it wasn't a conceptual precursor to blockchain design. Hashcash contributed proof-of-work, Merkle trees contributed data verification, and public-key crypto contributed digital signatures — all directly cited in Bitcoin's design lineage." },
              { q: "According to Catalini & Gans, blockchain's economic significance comes from reducing:", options: ["The cost of computation and storage", "The cost of verification and the cost of networking", "The cost of regulation and compliance", "The cost of marketing and customer acquisition"], answer: 1, explanation: "The Catalini & Gans framework identifies two specific costs: verification (confirming transaction attributes without intermediaries) and networking (operating platforms without rent-extracting middlemen). This is the core analytical lens MIT Sloan uses for blockchain evaluation." },
              { q: "The 'cost of verification' in the Catalini & Gans framework refers to:", options: ["The cost of mining new blocks", "The cost of confirming transaction attributes without a trusted intermediary", "The cost of verifying blockchain software is bug-free", "The cost of KYC/AML compliance specifically"], answer: 1, explanation: "Cost of verification encompasses all costs of confirming identity, ownership, legitimacy, and other transaction attributes. Blockchain reduces this by making records cryptographically verifiable by anyone, without needing the intermediary to confirm them." },
              { q: "A hospital stores baby identity records on blockchain. The primary limitation is:", options: ["Blockchain is too slow for hospital use", "Blockchain cannot guarantee the initial link between digital record and physical baby (oracle problem)", "Hospitals cannot use blockchain under GDPR", "Records can be easily altered by administrators"], answer: 1, explanation: "This is the oracle problem — blockchain guarantees digital records haven't been tampered with, but cannot guarantee the initial link between a digital record and the physical world was correct. This is a fundamental limitation highlighted by Catalini." },
              { q: "When is a traditional database superior to blockchain?", options: ["When multiple distrusting parties need shared truth", "When a single trusted organisation controls data and speed is critical", "When data immutability is the primary requirement", "When the system must operate across borders"], answer: 1, explanation: "If one trusted organisation controls the data, a traditional database offers superior speed (millions of TPS vs 7-65,000), lower cost, and easier maintenance. Blockchain's overhead is only justified when trust between multiple parties is the core problem." },
              { q: "The 'cost of networking' in the Catalini & Gans framework refers to:", options: ["The cost of internet bandwidth for running a node", "The cost of building professional relationships", "The cost of operating a marketplace without a powerful intermediary extracting rents", "The cost of connecting blockchain networks to each other"], answer: 2, explanation: "Cost of networking is the cost of bootstrapping and maintaining a market or platform where no single entity controls the rules, data, or economics. Tokens enable this by incentivising participation, serving as exchange medium, and granting governance rights." },
              { q: "Tokens on a blockchain can simultaneously serve which three functions?", options: ["Storage, computation, and bandwidth", "Incentive for early adopters, medium of exchange, and governance rights", "Identity verification, payment processing, and data storage", "Mining, staking, and lending"], answer: 1, explanation: "This triple function — incentive (speculation on future value attracts early participants), exchange (medium for transactions within the network), and governance (voting rights over protocol changes) — is what makes tokens a powerful tool for bootstrapping decentralised networks." },
              { q: "Bitcoin's genesis block newspaper headline served primarily as:", options: ["Marketing for Bitcoin", "A timestamp and philosophical statement about the system's purpose", "A legal disclaimer", "An encrypted message to other cypherpunks"], answer: 1, explanation: "The Times headline served dual purposes: as a timestamp proving the block was mined on January 3, 2009 (and not earlier), and as a philosophical statement about why a trustless monetary system was needed — during a financial crisis caused by institutional failures." },
              { q: "Which scenario genuinely benefits from blockchain over a traditional database?", options: ["A single company tracking internal inventory", "A social media platform storing user posts", "Multiple competing banks sharing trade settlement records without trusting a central party", "A startup building a simple e-commerce checkout"], answer: 2, explanation: "Multiple competing banks needing shared truth without trusting any single party is a textbook blockchain use case — it involves mutual distrust, need for a shared ledger, and high verification costs. The other scenarios all have a natural trusted central authority." },
              { q: "Intermediaries exist primarily because they solve:", options: ["Information asymmetry, coordination failure, and enforcement", "Scalability, security, and decentralisation", "Marketing, distribution, and customer support", "Regulatory compliance, taxation, and auditing"], answer: 0, explanation: "These three functions — reducing information gaps, enabling coordination among parties, and enforcing agreements — are the fundamental economic reasons intermediaries exist. Blockchain offers alternatives to each through transparent records, consensus mechanisms, and smart contracts." },
              { q: "Why can't Bitcoin currently replace Visa for everyday retail payments?", options: ["Bitcoin is illegal in most countries", "Bitcoin lacks throughput (~7 TPS vs 65,000), has high latency, volatility, and no chargebacks", "Bitcoin transactions are not secure", "Visa has a patent on digital payment processing"], answer: 1, explanation: "Bitcoin's base layer processes ~7 TPS with 10-minute block intervals, has significant price volatility, and offers no consumer protection mechanism like chargebacks. These are architectural trade-offs, not bugs — Bitcoin optimises for decentralisation and censorship resistance over throughput." },
              { q: "12 competing manufacturers tracking component provenance with no single data controller. This involves:", options: ["Low verification, low networking — blockchain unnecessary", "High verification, high networking — blockchain well-suited", "Low verification, high networking — traditional DB better", "High verification, low networking — a single auditor suffices"], answer: 1, explanation: "Competing manufacturers (high networking cost — no natural trusted central party) tracking provenance (high verification cost — need to confirm component origin and authenticity across multiple parties). This maps to the blockchain sweet spot in the Catalini & Gans matrix." },
              { q: "The most accurate summary of blockchain's relationship to existing finance:", options: ["Blockchain will replace all financial intermediaries within 10 years", "Blockchain is niche with no mainstream finance relevance", "Blockchain principles are being selectively absorbed into existing infrastructure, while decentralised alternatives serve specific use cases", "Blockchain only matters for crypto trading"], answer: 2, explanation: "The reality is nuanced: blockchain isn't replacing finance wholesale, but its principles (trustless verification, distributed consensus, programmable money) are being adopted by incumbents like JPMorgan (Kinexys), Visa (stablecoin pilots), and DTCC (tokenisation). Pure decentralised systems serve specific needs where censorship resistance or trustlessness is critical." }
            ]
          }
        },
        {
          id: "M2",
          title: "Cryptographic building blocks",
          time: "4 hrs",
          overview: "A deep-dive into the technical primitives that make blockchain work: hash functions, public-key cryptography, digital signatures, Merkle trees, and consensus mechanisms. You'll understand the blockchain trilemma and trace a transaction from signing to finality.",
          topics: [
            "Hash functions: SHA-256 properties (deterministic, fixed-length, avalanche effect, pre-image resistance)",
            "Public-private key cryptography: key generation, signing, verification",
            "Digital signatures: proving ownership without revealing secrets",
            "Merkle trees: efficient data verification across large datasets",
            "Consensus mechanisms deep-dive: PoW, PoS, DPoS, PBFT — trade-offs",
            "Block structure: header, nonce, timestamp, previous hash, Merkle root",
            "Chain validation, finality, and fork resolution"
          ],
          lectureContent: [],
          caseStudy: {
            title: "Ethereum's merge: PoW to PoS (Sep 2022)",
            sections: [
              { heading: "The merge", body: "Ethereum transitioned from Proof-of-Work to Proof-of-Stake — reducing energy consumption by ~99.95% while maintaining security. Analysis covers technical execution risk, economic implications for miners vs validators, staking economics, and the centralisation debate around Lido's dominance in liquid staking." }
            ],
            discussionQuestions: [
              "What are the trade-offs between PoW and PoS from a security perspective?",
              "How does validator centralisation in PoS differ from mining pool centralisation in PoW?",
              "Why did Ethereum choose a gradual transition rather than a clean-start approach?"
            ]
          },
          readings: [
            { title: "Antonopoulos, 'Mastering Bitcoin' Ch. 4 & 10", url: "https://github.com/bitcoinbook/bitcoinbook" },
            { title: "Buterin (2014) Ethereum Whitepaper — consensus sections", url: "https://ethereum.org/en/whitepaper/" }
          ],
          keyFramework: {
            title: "The blockchain trilemma",
            rows: [
              { label: "Scalability", value: "High throughput and fast confirmation times" },
              { label: "Security", value: "Resistance to attacks and network integrity" },
              { label: "Decentralisation", value: "No single point of control or failure" },
              { label: "The trade-off", value: "Optimising for any two typically compromises the third" }
            ]
          },
          assessment: {
            type: "exercise",
            title: "Transaction tracing exercise",
            description: "Trace a Bitcoin transaction from digital signature creation through network propagation, mempool inclusion, miner selection, block construction, proof-of-work solution, block propagation, and 6-confirmation finality. Explain what happens cryptographically at each step."
          }
        },
        {
          id: "M3",
          title: "Smart contracts & programmable money",
          time: "4 hrs",
          overview: "Smart contract architecture, Solidity basics, the oracle problem, gas economics, security vulnerabilities, and Layer 1 vs Layer 2 scaling solutions. Culminates in the Week 1 capstone assessment.",
          topics: [
            "Smart contract architecture: Ethereum (EVM), Solana (Sealevel), Sui (Move)",
            "Solidity basics: state variables, functions, modifiers, events, lifecycle",
            "Oracles and the oracle problem: Chainlink's decentralised oracle network",
            "Gas fees and computational economics",
            "Security vulnerabilities: reentrancy, integer overflow, front-running",
            "Formal verification and audit practices",
            "Layer 1 vs Layer 2: optimistic rollups, ZK-rollups, sidechains, state channels"
          ],
          lectureContent: [],
          caseStudy: {
            title: "The DAO hack (2016) — $60M exploit and the hard fork",
            sections: [
              { heading: "The exploit and its aftermath", body: "A reentrancy vulnerability allowed an attacker to drain $60M in ETH. The community faced a dilemma: accept the hack (preserving immutability) or hard-fork to reverse it (preserving value but breaking 'code is law'). Ethereum hard-forked; the minority chain became Ethereum Classic. Key lessons in smart contract security, governance, and the limits of 'trustless' systems." }
            ],
            discussionQuestions: [
              "Was the hard fork the right decision? What principle matters more — immutability or protecting users?",
              "How should smart contract security be balanced with innovation speed?",
              "What role should formal verification play in high-value smart contracts?"
            ]
          },
          readings: [
            { title: "Szabo (1997) 'Formalizing and Securing Relationships on Public Networks'", url: "" },
            { title: "Trail of Bits Smart Contract Security Guidelines", url: "https://github.com/crytic/building-secure-contracts" }
          ],
          keyFramework: {
            title: "Layer 2 scaling comparison",
            rows: [
              { label: "Optimistic rollups", value: "Assume valid, fraud-proof challenge (7 days). Arbitrum, Optimism." },
              { label: "ZK-rollups", value: "Validity proofs, instant finality. zkSync, StarkNet." },
              { label: "Sidechains", value: "Independent consensus, bridge to mainnet. Polygon PoS." },
              { label: "State channels", value: "Off-chain for two parties, settle on-chain. Lightning, Raiden." }
            ]
          },
          assessment: {
            type: "written",
            title: "Week 1 capstone (500 words)",
            description: "For a given industry, evaluate whether blockchain reduces the cost of verification, the cost of networking, or both. Use the Catalini & Gans framework. Include specific examples of current intermediary costs that blockchain could reduce, and identify at least one limitation or risk."
          }
        }
      ]
    },
    {
      id: 2,
      title: "Financial applications & institutional landscape",
      hours: "13–15 hrs",
      theme: "How blockchain is transforming finance — from DeFi and stablecoins to tokenisation and regulation.",
      colorVar: "blue",
      modules: [
        {
          id: "M4",
          title: "DeFi: decentralised finance deep-dive",
          time: "4 hrs",
          overview: "DeFi architecture, AMMs, lending protocols, yield farming, flash loans, and risk frameworks. Covers the full DeFi stack from composability to real-world asset integration.",
          topics: [
            "DeFi architecture and composability ('money legos')",
            "AMMs and liquidity pools: Uniswap v3/v4 concentrated liquidity",
            "Lending protocols: Aave, Compound — overcollateralisation and liquidation",
            "Yield farming, staking, and liquid staking (Lido, Rocket Pool)",
            "Flash loans: mechanics, legitimate uses, and attack vectors",
            "DEX vs CEX trade-offs: custody, transparency, regulation",
            "DeFi risks: impermanent loss, smart contract risk, governance attacks",
            "TVL analysis and protocol evaluation frameworks",
            "Real-world asset (RWA) integration in DeFi (2025-26 trend)"
          ],
          lectureContent: [],
          caseStudy: {
            title: "Uniswap v3 & Terra/Luna collapse",
            sections: [
              { heading: "Two sides of DeFi", body: "Uniswap v3's concentrated liquidity: capital-efficient market making that outperforms traditional order books for long-tail assets. Contrast with Terra/Luna (May 2022): how an algorithmic stablecoin's death spiral wiped out $40B. Lessons in mechanism design, risk management, and the difference between innovation and recklessness." }
            ],
            discussionQuestions: [
              "What made Uniswap v3's concentrated liquidity a genuine innovation rather than incremental improvement?",
              "Could the Terra/Luna collapse have been predicted from the mechanism design?",
              "How should DeFi protocols handle systemic risk?"
            ]
          },
          readings: [
            { title: "Harvey, Ramachandran & Santoro (2021) 'DeFi and the Future of Finance'", url: "" },
            { title: "Schär (2021) 'Decentralized Finance: On Blockchain-Based Financial Markets'", url: "" }
          ],
          keyFramework: {
            title: "DeFi risk framework",
            rows: [
              { label: "Smart contract risk", value: "Code vulnerabilities, unaudited forks, upgrade proxy attacks" },
              { label: "Economic risk", value: "Impermanent loss, liquidation cascades, oracle manipulation" },
              { label: "Governance risk", value: "Token concentration, malicious proposals, voter apathy" },
              { label: "Regulatory risk", value: "Securities classification, KYC requirements, jurisdiction shopping" }
            ]
          },
          assessment: {
            type: "exercise",
            title: "Protocol risk analysis",
            description: "Select a live DeFi protocol. Evaluate its smart contract risk, economic risk, governance risk, and regulatory risk using the framework. Provide an overall risk-adjusted assessment and recommendation."
          }
        },
        {
          id: "M5",
          title: "Stablecoins, CBDCs & the future of money",
          time: "4.5 hrs",
          overview: "Stablecoin taxonomy, the GENIUS Act, MiCA regulation, CBDC design choices, digital yuan, cross-border disruption, and privacy trade-offs in digital currency.",
          topics: [
            "Stablecoin taxonomy: fiat-backed (USDC, USDT), crypto-collateralised (DAI), algorithmic",
            "GENIUS Act (July 2025): US stablecoin regulatory framework",
            "EU MiCA regulation: full enforcement since January 2025",
            "CBDCs: wholesale vs retail, account vs token design",
            "Digital yuan (e-CNY) pilot and surveillance implications",
            "Fed digital dollar debate",
            "Stablecoins as payment rails vs traditional SWIFT/SEPA",
            "Cross-border payments disruption",
            "Privacy vs surveillance trade-offs",
            "Programmable money: conditional payments, smart contract disbursement"
          ],
          lectureContent: [],
          caseStudy: {
            title: "Circle (USDC) post-GENIUS Act; China's e-CNY; El Salvador",
            sections: [
              { heading: "Three models of digital money", body: "Circle's regulatory-first approach after the GENIUS Act provided US stablecoins a legal framework. China's state-controlled e-CNY: financial inclusion vs surveillance tension. El Salvador's Bitcoin legal tender experiment: bold ambition vs implementation reality." }
            ],
            discussionQuestions: [
              "Which model — regulated private stablecoin, state CBDC, or Bitcoin legal tender — has the strongest long-term viability?",
              "How should CBDC design balance financial inclusion with privacy?",
              "What role should stablecoins play in cross-border payments?"
            ]
          },
          readings: [
            { title: "BIS (2025) Annual Report on CBDC Progress", url: "https://www.bis.org/" },
            { title: "Gorton & Zhang (2023) 'Taming Wildcat Stablecoins'", url: "" }
          ],
          keyFramework: {
            title: "Digital currency design spectrum",
            rows: [
              { label: "Fiat-backed stablecoin", value: "Private issuer, 1:1 reserve, programmable, regulatory dependent" },
              { label: "Crypto-collateralised", value: "Decentralised, overcollateralised, governance-driven (DAI)" },
              { label: "Algorithmic", value: "No collateral, mechanism-dependent, high failure rate" },
              { label: "CBDC (retail)", value: "Central bank-issued, legal tender, privacy concerns" },
              { label: "CBDC (wholesale)", value: "Interbank settlement, limited access, efficiency-focused" }
            ]
          },
          assessment: {
            type: "written",
            title: "Policy memo (400 words)",
            description: "You are advising a central bank considering a retail CBDC. Write a policy memo covering: design recommendation (account-based vs token-based), privacy architecture, impact on commercial banks, interoperability with existing payment systems, and one risk to mitigate."
          }
        },
        {
          id: "M6",
          title: "Tokenisation & institutional adoption",
          time: "4.5 hrs",
          overview: "Real-world asset tokenisation, DTCC initiative, fractional ownership, BlackRock BUIDL, NFTs beyond art, token standards, and institutional infrastructure.",
          topics: [
            "Real-world asset tokenisation: real estate, bonds, equities, commodities",
            "DTCC tokenisation initiative: Dec 2025 SEC no-action letter, H2 2026 rollout",
            "STOs vs ICOs vs IEOs",
            "Fractional ownership economics",
            "BlackRock BUIDL fund and institutional tokenisation",
            "JPMorgan Onyx/Kinexys: enterprise blockchain",
            "NFTs beyond art: supply chain, IP rights, gaming, tickets",
            "Token standards: ERC-20, ERC-721, ERC-1155, ERC-4626",
            "Legal frameworks for tokenised securities",
            "Custody solutions (Fireblocks, Anchorage)"
          ],
          lectureContent: [],
          caseStudy: {
            title: "BlackRock BUIDL, DTCC 2026, Singapore Project Guardian",
            sections: [
              { heading: "Three institutional milestones", body: "BlackRock's BUIDL fund tokenising US Treasury exposure on Ethereum. DTCC's SEC-approved plan to tokenise custodied assets for H2 2026. Singapore MAS Project Guardian testing tokenised bonds, FX, and asset management across multiple banks." }
            ],
            discussionQuestions: [
              "What does BlackRock's entry signal about institutional confidence in tokenisation?",
              "How does the DTCC initiative change the risk profile for traditional asset managers?",
              "What governance challenges does multi-bank tokenisation (Project Guardian) create?"
            ]
          },
          readings: [
            { title: "McKinsey (2024) 'What is Tokenisation?'", url: "" },
            { title: "WEF (2025) Digital Asset Adoption Report", url: "" }
          ],
          keyFramework: {
            title: "Token standard selection guide",
            rows: [
              { label: "ERC-20", value: "Fungible: currencies, utility tokens, governance tokens" },
              { label: "ERC-721", value: "Non-fungible: unique assets, deeds, art, identity" },
              { label: "ERC-1155", value: "Multi-token: gaming (fungible ammo + unique weapons)" },
              { label: "ERC-4626", value: "Tokenised vaults: yield-bearing, DeFi composability" }
            ]
          },
          assessment: {
            type: "written",
            title: "Week 2 capstone (800 words)",
            description: "Design a tokenisation strategy for a real asset class. Include: asset selection and rationale, token standard, blockchain platform, regulatory considerations, go-to-market, target investor profile, liquidity mechanism, and key risks."
          }
        }
      ]
    },
    {
      id: 3,
      title: "Enterprise strategy, frontiers & capstone",
      hours: "13–15 hrs",
      theme: "Applying blockchain to business strategy, exploring AI convergence, and building your blockchain business case.",
      colorVar: "plum",
      modules: [
        {
          id: "M7",
          title: "Enterprise blockchain & supply chain",
          time: "4 hrs",
          overview: "Enterprise platforms, permissioned vs permissionless design, supply chain transparency, digital identity, zero-knowledge proofs, interoperability, and the build-vs-buy framework.",
          topics: [
            "Enterprise platforms: Hyperledger Fabric, R3 Corda, Quorum",
            "Permissioned vs permissionless design decisions",
            "Supply chain transparency and anti-counterfeiting",
            "Healthcare: medical records, FDA DSCSA drug traceability",
            "Trade finance digitisation",
            "Digital identity: DIDs, verifiable credentials, self-sovereign identity",
            "Zero-knowledge proofs for privacy-preserving verification",
            "Interoperability: cross-chain bridges, Cosmos IBC, Polkadot",
            "Build vs buy decision framework"
          ],
          lectureContent: [],
          caseStudy: {
            title: "Walmart food traceability; Maersk TradeLens; De Beers Tracr",
            sections: [
              { heading: "Three enterprise stories", body: "Walmart: reduced food provenance tracking from 7 days to 2.2 seconds using Hyperledger. Maersk TradeLens: technically successful consortium blockchain that failed commercially — lessons in governance. De Beers Tracr: tracking diamonds mine-to-retail to prevent conflict diamonds." }
            ],
            discussionQuestions: [
              "Why did TradeLens fail despite being technically sound?",
              "What governance structures are needed for successful blockchain consortia?",
              "When should an enterprise use a public chain vs building a permissioned network?"
            ]
          },
          readings: [
            { title: "Iansiti & Lakhani (2017) 'The Truth About Blockchain' (HBR)", url: "" },
            { title: "Gartner (2025) Enterprise Blockchain Adoption Report", url: "" }
          ],
          keyFramework: {
            title: "Build vs buy decision matrix",
            rows: [
              { label: "Build custom", value: "Unique advantage, proprietary data, internal expertise" },
              { label: "Enterprise platform", value: "Standard use case, permissioning, compliance-first" },
              { label: "Join consortium", value: "Multi-party, shared governance, network effects critical" },
              { label: "Public chain", value: "Max transparency, global access, token economics" }
            ]
          },
          assessment: {
            type: "exercise",
            title: "Build vs buy framework application",
            description: "Select a specific enterprise use case. Apply the decision matrix to recommend the optimal approach with evidence from comparable deployments."
          }
        },
        {
          id: "M8",
          title: "AI × blockchain & emerging frontiers",
          time: "4 hrs",
          overview: "AI-blockchain convergence, decentralised compute, DePIN, DAOs, Web3 ownership economy, quantum threats, sustainability, and 2026-27 regulatory outlook.",
          topics: [
            "AI + blockchain: decentralised training, data marketplaces, AI agent wallets",
            "Blockchain for AI model provenance and audit trails",
            "Decentralised compute: Render, Akash GPU marketplace",
            "DePIN: decentralised physical infrastructure (Helium, Hivemapper)",
            "DAOs: governance design, voting mechanisms, treasury management",
            "Web3 and the ownership economy",
            "Quantum computing threats to blockchain",
            "Post-quantum cryptographic solutions",
            "Sustainability: PoS energy reduction, carbon tokenisation",
            "Regulatory outlook 2026-27"
          ],
          lectureContent: [],
          caseStudy: {
            title: "Fetch.ai agents; Helium DePIN; MakerDAO governance",
            sections: [
              { heading: "Three frontier models", body: "Fetch.ai: autonomous economic agents transacting on behalf of users. Helium: token incentives built physical wireless infrastructure across 180+ countries. MakerDAO: evolution from simple governance to complex SubDAO structure managing $8B+ in assets." }
            ],
            discussionQuestions: [
              "Which AI × blockchain application has the strongest near-term business viability?",
              "Can DePIN models work beyond telecoms?",
              "What are the limits of DAO governance for complex organisations?"
            ]
          },
          readings: [
            { title: "Vitalik Buterin (2024) blog posts on AI × crypto", url: "https://vitalik.eth.limo/" },
            { title: "WEF (2025) 'Blockchain Beyond the Hype'", url: "" }
          ],
          keyFramework: {
            title: "AI × blockchain value map",
            rows: [
              { label: "AI enhances blockchain", value: "Smart contract optimisation, fraud detection, MEV" },
              { label: "Blockchain enhances AI", value: "Data provenance, model audit trails, decentralised training" },
              { label: "Converged apps", value: "AI agents with wallets, compute markets, autonomous DAOs" },
              { label: "Risk intersection", value: "Automated exploits, AI market manipulation, deepfake identity" }
            ]
          },
          assessment: {
            type: "written",
            title: "Trend analysis (500 words)",
            description: "Pick one emerging frontier. Evaluate its 3-year business viability: current state, enablers, barriers, competitive landscape, and your prediction with reasoning."
          }
        },
        {
          id: "M9",
          title: "Capstone: blockchain business case",
          time: "5 hrs",
          overview: "Build a complete blockchain business case — from business model canvas and tokenomics through go-to-market strategy to board-level recommendation. This is your portfolio-ready deliverable.",
          topics: [
            "Business model canvas for blockchain ventures",
            "Token economics design (tokenomics)",
            "Go-to-market strategy: cold start, network effects, community",
            "Funding: VC, token sales, grants, revenue-based financing",
            "Pitching to stakeholders: board-level proposals",
            "Risk assessment: technical, regulatory, market, adoption",
            "Measuring ROI of blockchain implementations",
            "Full business case: problem → architecture → economics → roadmap → risk"
          ],
          lectureContent: [],
          caseStudy: {
            title: "Blockchain startup pitch deck pattern analysis",
            sections: [
              { heading: "What separates winners from vaporware", body: "Review of successful and failed blockchain pitch decks. Key patterns: clear problem-solution fit, defensible moat beyond 'uses blockchain,' realistic tokenomics, regulatory awareness, and team credibility. What investors actually look for." }
            ],
            discussionQuestions: [
              "What's the most common mistake in blockchain pitch decks?",
              "How do you answer 'why not just use a database?' convincingly?",
              "What makes tokenomics 'realistic' vs 'aspirational'?"
            ]
          },
          readings: [
            { title: "All prior module materials for synthesis", url: "" },
            { title: "Christensen — disruptive innovation applied to blockchain", url: "" }
          ],
          keyFramework: {
            title: "Blockchain business case structure",
            rows: [
              { label: "1. Problem", value: "What trust/verification/coordination problem exists?" },
              { label: "2. Why blockchain?", value: "Why not a traditional database?" },
              { label: "3. Architecture", value: "Chain, smart contracts, token design, integrations" },
              { label: "4. Economics", value: "Revenue, tokenomics, cost structure, unit economics" },
              { label: "5. Regulatory", value: "Jurisdiction, compliance, legal structure" },
              { label: "6. Roadmap", value: "Phases, team, partnerships, milestones" },
              { label: "7. Risk", value: "Technical, market, regulatory, adoption — with mitigations" }
            ]
          },
          assessment: {
            type: "written",
            title: "Final capstone (1,500–2,000 words)",
            description: "Complete blockchain business case: problem statement, blockchain justification, solution architecture, tokenomics, regulatory considerations, implementation timeline, risk analysis, and expected ROI. Board-level recommendation format."
          }
        }
      ]
    },
    {
      id: 4,
      title: "Bonus: programmable payments",
      hours: "4–5 hrs",
      theme: "Connecting traditional payment infrastructure with blockchain-native payment innovation.",
      colorVar: "olive",
      modules: [
        {
          id: "M10a",
          title: "From legacy rails to programmable money",
          time: "1.5 hrs",
          overview: "Bridges traditional payment rail architecture (CHAPS, BACS, RTGS, SEPA, RTP) with blockchain-native payment channels and programmable payment flows.",
          topics: [
            "Traditional rails: CHAPS, BACS, RTGS, SEPA, SWIFT gpi, FedNow, RTP",
            "Why legacy rails weren't built for programmability",
            "Programmable payments thesis: conditional logic in payment flows",
            "Smart contract-triggered payments: escrow, milestones, subscriptions",
            "Payment channels: Lightning Network, state channels, Raiden",
            "Near-instant settlement at scale",
            "Atomic swaps and cross-chain settlement"
          ],
          lectureContent: [],
          caseStudy: {
            title: "JPMorgan Kinexys vs Visa stablecoin settlement",
            sections: [
              { heading: "Two TradFi giants, two approaches", body: "JPMorgan built Kinexys (formerly Onyx) for institutional programmable payments on blockchain, handling billions daily. Visa piloted stablecoin settlement using USDC on Ethereum and Solana. Two different strategies for blockchain-native payments." }
            ],
            discussionQuestions: [
              "Which approach — JPMorgan's private chain or Visa's public chain integration — is more scalable?",
              "How do programmable payments change the role of correspondent banks?",
              "What would a fully programmable payment rail look like in 5 years?"
            ]
          },
          readings: [
            { title: "BIS (2025) 'The Future of Payments'", url: "" },
            { title: "Federal Reserve (2024) FedNow programmability whitepaper", url: "" }
          ],
          keyFramework: null,
          assessment: null
        },
        {
          id: "M10b",
          title: "Open banking, PSD3 & blockchain convergence",
          time: "1.5 hrs",
          overview: "PSD3 integration with blockchain, A2A payments, VRPs, stablecoin corridors, enterprise treasury automation, and ISO 20022 interoperability.",
          topics: [
            "PSD3 and open banking API integration with blockchain",
            "A2A payments and request-to-pay on-chain",
            "VRPs with smart contract automation",
            "Stablecoin rails vs correspondent banking",
            "Enterprise treasury: cash pooling, FX hedging, liquidity management",
            "India UPI and Payments Data Regulation — blockchain compliance",
            "SWIFT vs Ripple vs stablecoin corridors",
            "Embedded finance and blockchain at point of sale",
            "ISO 20022 and blockchain interoperability"
          ],
          lectureContent: [],
          caseStudy: {
            title: "Fnality International; Modulr; Ripple vs SWIFT",
            sections: [
              { heading: "Three payment innovators", body: "Fnality's DLT wholesale payment system backed by 15+ global banks. Modulr's API-first programmable payments. Ripple ODL vs SWIFT gpi: cost and speed comparison for cross-border corridors." }
            ],
            discussionQuestions: [
              "Can stablecoin corridors genuinely compete with SWIFT gpi on cost and speed?",
              "How does PSD3 change the competitive landscape for blockchain payment providers?",
              "What's the path to enterprise treasury automation using smart contracts?"
            ]
          },
          readings: [
            { title: "European Commission PSD3 proposal", url: "" },
            { title: "McKinsey Global Payments Report (2025)", url: "" }
          ],
          keyFramework: null,
          assessment: null
        },
        {
          id: "M10c",
          title: "Assessment: programmable payments strategy",
          time: "1.5 hrs",
          overview: "Your bonus assessment: a strategic recommendation paper framed as a product manager at a Tier 1 bank evaluating programmable payment capabilities.",
          topics: [],
          lectureContent: [],
          caseStudy: null,
          readings: [],
          keyFramework: null,
          assessment: {
            type: "written",
            title: "Strategic recommendation (600–800 words)",
            description: "You are a PM at a Tier 1 bank. The head of payments wants your evaluation: build programmable payments on blockchain or enhance existing rails? Cover: current state assessment, blockchain vs enhanced-traditional evaluation, proposed architecture, regulatory considerations (PSD3, GENIUS Act), 6-12 month roadmap, and risk analysis. Grading: technical depth (25%), strategic reasoning (25%), regulatory awareness (20%), implementation realism (20%), clarity (10%)."
          }
        }
      ]
    }
  ]
};
