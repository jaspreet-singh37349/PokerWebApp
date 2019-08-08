from flask import Flask,render_template
import PokerGame
import random
# render_template helps to give path of html file in python file


app = Flask(__name__)

@app.route('/')  # this is done to create endpoint(address of host)
def welcome():
    cards = [ 'AH','AC','AS','AD','2S','2C','2H','2D','3D','3C','3H','3S','4S','4D','4C','4H','5S','5D','5C',
             '5H','6S','6D','6C','6H','7S','7D','7C','7H','8S','8D','8C','8H','9S','9D','9C','9H','TS','TD','TC',
             'TH','JS','JD','JC','JH','QS','QD','QC','QH','KS','KD','KC','KH']
    
    user1_cards = []
    user2_cards = []
    user3_cards = []
    user4_cards = []
    
    random.shuffle(cards)
    
    for i in range(5):
        user1_cards.append(cards[i])
        
    
    for i in range(5,10):
        user2_cards.append(cards[i])
        
        
    for i in range(10,15):
        user3_cards.append(cards[i])
        
    for i in range(15,20):
        user4_cards.append(cards[i])
        
        user1_cards.sort()
        user2_cards.sort()
        user3_cards.sort()
        user4_cards.sort()
        
    hands = [user1_cards,user2_cards,user3_cards,user4_cards]
    
    hand,Winner_Deck,player= PokerGame.poker(hands)
    
    return render_template('poker.html',user1 = user1_cards,user2=user2_cards,user3=user3_cards,user4=user4_cards,hand=hand,Winner_Deck=Winner_Deck,player=player)

@app.route('/jassi')
def method():
    return 'yoooo'

if __name__ == '__main__':
    print(app.config)
    app.config['DEBUG'] = True   # To run in debug mode for fast working
    app.run()