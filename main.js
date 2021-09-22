// https://github.com/sendgrid/sendgrid-nodejs/tree/ac1818c9172ea1ae5c851c3ea3ac947237050241
console.info('Starting...')

const sendGridHelper = require('sendgrid').mail;
const subjectString = 'subject';
const bodyString = '<p>whatever</p>'

const helper = sendGridHelper;

const from = new helper.Email('dan@devopsrockstars.com');
const to = new helper.Email('dan@devopsrockstars.com');
const body = new helper.Content('text/html', bodyString);
const personalization = new helper.Personalization();

const mail = new helper.Mail(from, subjectString, to, body);
const json = mail.toJSON();

var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: json
});

sg.API(request, function (error, response) {
    if (error) {
      console.log('Error response received');
    }
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  });