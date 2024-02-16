const soccer = {
  teams: 2,
  playersByTeam: 11,
  periods: 2,
  time: 90,
  rules() {
    console.log("Rules of the game...");
    console.log(`
      Number of teams: ${this.teams},
      Players: ${this.teams * this.playersByTeam},
      Time: ${this.time * this.periods}
    `)
  },
  kick() {
    console.log("Kicking the ball!")
  }
}

const basketball = {
  teams: 2,
  playersByTeam: 5,
  periods: 4,
  time: 15,
  rules() {
    console.log("Rules of the game...");
    console.log(`
      Number of teams: ${this.teams},
      Players: ${this.teams * this.playersByTeam},
      Time: ${this.time * this.periods}
    `)
  },
  throw() {
    console.log("Throwing the ball!");
  }
}

const volleyball = {
  teams: 2,
  playersByTeam: 6,
  periods: 5,
  time: undefined,
  rules() {
    console.log("Rules of the game...");
    console.log(`
      Number of teams: ${this.teams},
      Players: ${this.teams * this.playersByTeam},
      Time: ${this.time ? this.time * this.periods : "Defined by points"}
    `)
  },
  serve() {
    console.log("Serving the ball!");
  }
}

soccer.rules();
basketball.rules();
volleyball.rules();