// votingSystem.js - Voting system for IT/Digital Officer

class VotingSystem {
    constructor() {
        this.votes = {};
        this.isVotingOpen = false;
        this.winner = null;
    }

    openVotes() {
        this.isVotingOpen = true;
        console.log('Voting has been opened.');
    }

    closeVotes() {
        this.isVotingOpen = false;
        console.log('Voting has been closed.');
        this.selectWinner();
    }

    castVote(userId, vote) {
        if (!this.isVotingOpen) {
            console.log('Voting is currently closed.');
            return;
        }
        if (!this.votes[vote]) {
            this.votes[vote] = [];
        }
        if (!this.votes[vote].includes(userId)) {
            this.votes[vote].push(userId);
            console.log(`Vote casted for ${vote} by user ${userId}.`);
        } else {
            console.log(`User ${userId} has already voted for ${vote}.`);
        }
    }

    selectWinner() {
        const totalVotes = Object.values(this.votes).map(v => v.length);
        const maxVotes = Math.max(...totalVotes);
        const winners = Object.keys(this.votes).filter(v => this.votes[v].length === maxVotes);
        this.winner = winners.length === 1 ? winners[0] : winners;
        console.log(`Winners selected: ${this.winner}`);
    }
}

// Example of usage
const voting = new VotingSystem();
voting.openVotes();
voting.castVote('user1', 'optionA');
voting.castVote('user2', 'optionB');
voting.castVote('user1', 'optionB');
voting.closeVotes();