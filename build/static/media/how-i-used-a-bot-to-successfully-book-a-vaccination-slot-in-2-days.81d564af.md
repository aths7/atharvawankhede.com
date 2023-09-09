## How I used a Bot to Successfully book a Vaccination Slot in 2 Days!

**Using Python, Telegram & AWS to create a bot interacting with the Cowin API**

![Python Automation Bot](/images/blog/essay3-img1.jpeg)

If you are struggling to book a vaccination slot, blaming the government might not help — but a personalized bot will surely do ✅

The vaccination centres in my area are few and I was tired of regularly visiting the Arogya Setu App & Cowin website to see that all the slots in my area are booked. I also tried some telegram channels but they were always filled with way too many messages for other localities. And searching through those 200 messages every hour was taxing. So, I decided to be lazy and passed on this work to my bot.

And guess what? The bot completed the task of alerting me a slot is available in less than 48 hours and all I did was open the Cowin website immediately after I received a message from my bot.

> To help you build it for yourself, I have created this 3 parts tutorial:

> 👉 Python Code

> 👉 Telegram Message

> 👉 Running the python code every minute using AWS (cron)

A quick sidebar before we begin- I am assuming you some experience in coding & automation. If you are a beginner — worry not, I have tried to keep the article as jargon-free as possible & have added lots of links & tutorials wherever applicable.

---

### Let’s start with the Python Code:

Python is the simplest coding language to start with because of the simplicity of its grammar (syntax & important words). Once you have it installed, it's like simply writing what you want your code (bot) to do.

For python installation, you can refer to this youtube [video](https://www.youtube.com/watch?v=YYXdXT2l-Gg).

Next, your bot needs a place to work for you where it has all the packages or predefined, reusable codes which make our bot easy to write and really small. That place is called an environment; which you would have set up while installing python on your machine.

But what if you wanted to run the bot on another machine? Would that mean you would require watching the first video again and installing the python with the environment setup? Well, “virtual environments” are here for the rescue.

As the name suggests, you create a virtual place for your bot to run. And if you want to run the bot is some other machine without python installation, you can. This [video](https://www.youtube.com/watch?v=APOPm01BVrk) will help you set it up.

That was a lot of videos. I know. But don’t worry, the next steps can be simple copy-paste 😇

Now, we need our bot to talk to the Cowin website and find out if they have slots in our area. The way different codes talk to each other — and by different I mean, not just Python code talking with other Python code, but also Python code talking with Java code 🤯 — you get the idea. That way of communication is made possible by APIs — Application Programming Interface.

To add meaning to the fancy words — an API endpoint is a URL which the code visits, and can use to request information. Just like you visited Medium and asked for my article to Medium by clicking on the link. The bot will use the API end-point provided by the [government](https://apisetu.gov.in/public/marketplace/api/cowin) to check the availability of slots in your area. Time to code:

Firstly, we will need the packages to visit the website.

```js
import requests
```

We will also need a package to check today’s date. Yes, we have to tell the bot which is today's date — the bot’s only as smart as you make them.

```js
import datetime
```

But to import the packages, make sure you have them installed in your virtual environment:

```js
pip3 install requests -t .
pip3 install datetime -t .
```

A good programming habit is to store information in a variable so that the bot can reuse it easily. Adding our variables.

```js
import requests
import datetime
url = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public'
```

But hold on a second, didn’t I mention that I customized the bot to find slots in my area? So, let’s ask Cowin about slots in my area for 11, July 2020. You can update the code as per your requirements.

```js
import requests
import datetime
url = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=401107&date=11-07-2021'
```

Copy and paste the above link in your browser and check if you see something like below. Remember, since we are storing data in variables, url is our variable and the information is [https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=401107&date=11-07-2021](https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=401107&date=11-07-2021) without the quotes.

```js
{
   "sessions":[
      {
         "center_id":804791,
         "name":"Central Plaza Hall Mbmc",
         "address":"Bank Of India Building",
         "state_name":"Maharashtra",
         "district_name":"Thane",
         "block_name":"Thane Municipal Corporation",
         "pincode":401107,
         "from":"09:00:00",
         "to":"15:00:00",
         "lat":19,
         "long":78,
         "fee_type":"Paid",
         "session_id":"9ec9f4a1-09d0-435f-a75e-3bf3952e7d1b",
         "date":"11-07-2021",
         "available_capacity":0,
         "available_capacity_dose1":0,
         "available_capacity_dose2":0,
         "fee":"0",
         "min_age_limit":18,
         "allow_all_age":true,
         "vaccine":"COVISHIELD",
         "slots":[
            "09:00AM-10:00AM",
            "10:00AM-11:00AM",
            "11:00AM-12:00PM",
            "12:00PM-03:00PM"
         ]
      },
      {
         "center_id":737803,
         "name":"MBMC WOCHARDT HOSPITAL",
         "address":"NEAR RASSAZ MIRA ROAD EAST",
         "state_name":"Maharashtra",
         "district_name":"Thane",
         "block_name":"Mira Bhayander Municipal Corporation",
         "pincode":401107,
         "from":"08:00:00",
         "to":"17:00:00",
         "lat":19,
         "long":72,
         "fee_type":"Paid",
         "session_id":"4a7ff98d-20b5-4f06-a906-f904f2b7a327",
         "date":"11-07-2021",
         "available_capacity":0,
         "available_capacity_dose1":0,
         "available_capacity_dose2":0,
         "fee":"780",
         "min_age_limit":18,
         "allow_all_age":true,
         "vaccine":"COVISHIELD",
         "slots":[
            "08:00AM-10:00AM",
            "10:00AM-12:00PM",
            "12:00PM-02:00PM",
            "02:00PM-05:00PM"
         ]
      }
   ]
}
```

This is the data that the Cowin website has sent in response to the conditions we specified. The conditions, pin code & date, are the parameters to the API endpoint. Now, let’s send the data via our bot and store the response in a variable.

```js
import requests
import datetime
url = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=401107&date=11-07-2021'
response = requests.get(url, headers=headers)
response_jsonified = x.json()
```

We jsonify the data so that the bot can parse & understand data.

So, after adding the parsing of data to check if the response has something of value, the code looks like this:

```js
import requests
import datetime
url = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=401107&date=11-07-2021'
response = requests.get(url, headers=headers)
response_jsonified = x.json()
for item in response_jsonified['sessions']:
  if item['available_capacity_dose1'] > 0:
    <send telegram message>
```

For now, we have made the bot capable of talking to the Cowin website and identifying if there are slots available for us. To make the bot smarter, I am adding a date loop to check for today and the next seven days.

```js
import requests
import datetime
url = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=401107&date={0}'
today = datetime.date.today()
start = today - datetime.timedelta(days=0)
all_dates = [start + datetime.timedelta(days=d) for d in range(7)]
for d in all_dates:
  # Getting the date in dd-mm-yyyy format
  updated_d = str(d.strftime("%d-%m-%Y"))
  response = requests.get(url.format(d), headers=headers)
  response_jsonified = x.json()
  response = requests.get(url, headers=headers)
  response_jsonified = x.json()
  for item in response_jsonified['sessions']:
    if item['available_capacity_dose1'] > 0:
      <send telegram message>
```

---

## Sending a Telegram Message:

Now, this is where things get very interesting. We use the Telegram API to send a message.

![Telegram API Bot](/images/blog/essay3-img2.png)

- First, download the telegram app and search for BotFather.
- Type /newbot and send the message
- You are prompted to name the bot. Enter your cool unique name.
- You will receive an access token. Keep it safe. Access tokens are basically passwords for APIs. (Yes, you can restrict the talking between bots using authentication)
- You have created a bot & you can see a Telegram of the same name.

Next, you will need the channel id which you can simply find entering this URL in the browser: https://api.telegram.org/bot<YourBotToken>/getUpdates

Copy the chat_id from the response and everything else, keep it safe.

To send a message to your telegram channel,

```js
import requests
bot_token = ''
chat_id = ''
message = 'This is a dummy message'
send_message_url = 'https://api.telegram.org/bot{0}/sendMessage?chat_id={1}&text={2}'.format(bot_token, chat_id, message)
response = requests.get(send_message_url)
```

Bringing everything together:

```js
import requests
import datetime
bot_token = ''
chat_id = ''
message = 'Slot Available'
url = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=401107&date={0}'
today = datetime.date.today()
start = today - datetime.timedelta(days=0)
all_dates = [start + datetime.timedelta(days=d) for d in range(7)]
for d in all_dates:
  response = requests.get(url.format(d), headers=headers)
  response_jsonified = x.json()
response = requests.get(url, headers=headers)
  response_jsonified = x.json()
for item in response_jsonified['sessions']:
  if item['available_capacity_dose1'] > 0:
    send_message_url = 'https://api.telegram.org/bot{0}/sendMessage?chat_id={1}&text={2}'.format(bot_token, chat_id, message)
    send_message_response = requests.get(send_message_url)
```

---

## The Final Step — Making the bot do your work using AWS:

- Create an AWS account here— Don’t worry, for our purposes, it’s free. For a year. You can follow these docs in case you are confused.
- Next, go to AWS Lambda from AWS Console and create a new lambda function. You’ll know what this means if you log into your AWS account and type Lambda. Lambda is an AWS service that allows you to run small codes.
- Remember we talked about virtual environments? This is where they will benefit us. We will simply copy & paste the entire virtual environment into AWS so that it can run as it was running on our system. In other words,
- Upload your code in the newly created Lambda function. You can follow along with these docs if you have any confusion. I should mention, the AWS docs are very easy to understand, even for a beginner.
- As the final step, go to AWS Cloudwatch, another AWS service and create a new rule to run our Lambda functions(bot) every minute. Docs.

Or at whichever frequency you like. But remember: **Cowin API has a restriction of 100 API calls every 5 mins.** Meaning if you make more than 100 URL hits in less than 5 mins, you are blocked for the remainder of the 5 mins.

---

And voilà, there’s a bot working for you ready to send you a message if there is any slot available in your pin code in the next seven days.

You can also configure the bot to check for specific hospitals, doses & time slots. I trust you to figure that magic out 😎

---

_The essay was orignally published on [Medium - Analytics Vidhya](https://medium.com/analytics-vidhya/how-i-used-a-bot-to-successfully-book-a-vaccination-slot-in-2-days-89e7ce274234)_
