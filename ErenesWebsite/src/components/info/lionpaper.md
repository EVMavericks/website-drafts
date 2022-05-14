### ADMINISTRATION AND DAO SETUP: 

- Roles/Departments: Self-assign roles in 🙋│role-selection to join the department that you fill you can contribute best to. Lounges are available for each thematic area to coordinate. 

 - Discourse is a forum-based discussion platform popular with DAOs. Tentatively, we will move forward with that as well, for use in long-form discussion and formulation of proposals. 

- Dework is a web3 Trello competitor with heavy integration possibilities for Discord. Some folks are exploring if the integrations are worth the security trade-offs (ie, Dework's bot's permissions), but the platform has been tentatively implemented for use in project management.

### WORKFLOW AND PROPOSAL PROCESS:
- [TBD?/in development]

### OUTREACH AND EDUCATION:

 - 📊│protocol-run-off-poll is a project to allow Mavericks to select their favorite DeFi protocols-- tournament style. Format still being actively discussed, but general thought is that we start with a pool of a few dozen protocols, and vote each week for our favorites. The lowest ranked options get eliminated. Gives us a chance to drip some alpha for each other as we learn about each protocol, gets the EVM name out there with the protocols themselves, etc.
(thanks @jumnhy )


### REVENUE GENERATION IDEAS

- STAKING #decentralized-staking
  - Staking as a service (“SaaS”): DAO takes deposits of ETH and/or RPL from users, sets up some sort of deposit/staking contract for ETH RP nodes using pooled assets from participants. Depositors would earn some premium above what they would earn versus just holding reth, but could take part in those earnings without having to have assets for a 16ETH+collateral node, and/or avoid RPL exposure (if depositing just ETH). DAO would take some % as profit above that amount. Perhaps offer EVM holders additional earnings if they stake/lock their EVM for a period of time. Would be as trustless as possible but would require hoomans to actually spin up the node(s) as currently a smart contract cannot run a node.
    - Current status: Just idea stage. RP team is enthusiastic on idea; likely will need some dev work to create a contract to accept deposits and to distribute revenue, at least. “Tokenomics” of RPL need to be considered i.e. pooling of RPL possibly disrupts intended mechanism of RPL collateral slashing motivating node runtime. Also issue of best/easiest means of DAO running nodes in this manner is via server based solution such as Allnodes. Possible helpful entities on RP discord willing to host nodes.
    - Next steps: 
      - outreach to the Professional Node Operators Guild via RP discord
      - Establish a working group to research and report best options to move forward

  - Some other staking mechanism (RPIP RPL “lockbox” loans?)
  - Achieving tax-exempt charitable status for the DAO. This would allow the DAO commission to any node operators to be designated as a charitable donation, allowing for a competitive advantage.


- Fractionalizing #evm-fractionalizing
  - DAO acquires EVM's (either unminted or buyback) and fractionalizes them, either on NFTX or Fractional.art, and sets up LP's to sell the tokens. DAO keeps all the LP fees or any other profit from use of tokens or LP tokens in defi.
Lessons learned so far: Need multiple EVM’s for deeper liquidity. Single sided initial Uni v3 pool can only come from single wallet in first transaction to set up pool; future single sided deposits can only be made outside of pool range. Fractional.art has possible security risk in multi-sig rugging all NFT’s locked in the vaults by setting all auction prices to 0. Auction mechanic offers multiple vectors of issues, (e.g. tokens going to L2 are essentially burned and could never be used for auction; if there can be no auction NFT is permanently fractionalized.) Likely would need a bespoke contract for us (like what Azuki did). NFTX may be preferable for larger “basket” or tokens. 
Status: need to draft concrete proposal, figure out if NFTX is the solution, and propose vote to utilize some % of minted EVM’s to tokenize. Possibly the quickest route to alternative revenue generation as it requires no dev time, can be done immediately if/when DAO agrees. 

- Merch
DAO prints and sells EVM merch. 

- EVM airdrops: Cubs, Magic-esque playing cards for gamifying EVM’s, or other NFT’s or other tokens airdropped on the community. Pros: guaranteed to generate volume and floor price raise; Cons: guaranteed to dump after airdrop. Perceived as “hype” and perhaps vapor-ware-ish practice. Any airdrop should have some legit rationale (could be as simple as a game-ified drop).

### GRANTS TO GIVE

- Gitcoin grants
- Direct grants/set up some sort of grant application or voting system
- Ethdev funding?
- Wildlife donations: Adopt a Lion or some other charitable contribution related to "big cat" wildlife charities.


### GRANTS TO APPLY FOR
- Rocket Pool
- Ethereum Foundation
- Uniswap?

### DEVELOPMENT:

- Dealing with Auto-minter royalty rake. Will require wrap or burn/re-mint. Significant change so will require a lot of input/work.
