function votingSystem(action) {
    let that = this;                //obekta
    let patcher = (function () {
        return {
            upvote: function () { that.upvotes++; },
            downvote: function () { that.downvotes++ },
            score: function () {
                function rate(up, down) {
                    let total = up + down
                    if (total >= 10) {
                        if (up / total > 0.66) return "hot";
                        else if (up - down >= 0 && (up > 100 || down > 100)) return "controversial"
                        else if (up - down < 0) return "unpopular"
                        return "new"
                    }
                    return "new"
                }

            let posVotes = that.upvotes;
            let negVotes = that.downvotes;
            if (that.upvotes + that.downvotes > 50) {
                posVotes += Math.ceil(0.25 * Math.max(that.upvotes, that.downvotes))
                negVotes += Math.ceil(0.25 * Math.max(that.upvotes, that.downvotes))

            }
            let totalVotes = that.upvotes - that.downvotes;
            let rating = rate(that.upvotes, that.downvotes)

            return [posVotes, negVotes, totalVotes, rating]
        }
    }
    })();
    return patcher[action]()
}

function example() {
    let obj = {id: '3', author: 'emil', content: 'wazaaaaa', upvotes: 100, downvotes: 100};
    votingSystem.call(obj, 'downvote');
    votingSystem.call(obj, 'upvote');
    console.log(votingSystem.call(obj, 'score'));
    for (let i = 0; i < 50; i++) {
        votingSystem.call(obj, 'downvote');
    }
    console.log(votingSystem.call(obj, 'score'));
}

example();

