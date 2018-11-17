const functions = require('firebase-functions');

exports.CatchPredefinedEvent = functions.analytics.event('app_open').onLog((event)=> {
    console.log(`event name: ${JSON.stringify(event.name)}`)
    console.log(JSON.stringify(event));
    return 0;
})

exports.CatchCustomEvent = functions.analytics.event('screen_view').onLog((event)=> {
    console.log(`event name: ${JSON.stringify(event.name)}`)
    console.log(JSON.stringify(event));
    return 0;
})

exports.CatchTargetEvent = functions.analytics.event('footer_wallet').onLog((event)=> {
    console.log(`event name: ${JSON.stringify(event.name)}`)
    console.log(JSON.stringify(event));
    return 0;
})
exports.CatchTargetEvent2 = functions.analytics.event('footer_portfolio').onLog((event)=> {
    console.log(`event name: ${JSON.stringify(event.name)}`)
    console.log(JSON.stringify(event));
    return 0;
})
exports.CatchTargetEvent3= functions.analytics.event('notification_foreground').onLog((event)=> {
    console.log(`event name: ${JSON.stringify(event.name)}`)
    console.log(JSON.stringify(event));
    return 0;
})
exports.CatchTargetEvent4= functions.analytics.event('transaction_received').onLog((event)=> {
    console.log(`event name: ${JSON.stringify(event.name)}`)
    console.log(JSON.stringify(event));
    return 0;
})