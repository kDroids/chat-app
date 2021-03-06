import {
    Selector
} from 'testcafe'; // first import testcafe selectors

fixture `Chat App End to End Testing` // declare the fixture
    .page `http://localhost:3000`; // specify the start page


//then create a test and place your code there
test('Login', async t => {
    await t
        .typeText("[name='name']", "Chief Bogo")
        .typeText("[name='room']", "1")
        .click('#join')

    // Use the assertion to check if the actual header text is equal to the expected one
    // .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});

test
    .page `http://localhost:3000/chat.html?name=Sam&room=1`
    ('Chat room entry', async t => {
        // Starts at http://devexpress.github.io/testcafe/blog/
        await t
            .typeText("[name='message']", "Hey All")
            .pressKey('enter')
            .typeText("[name='message']", "This is Chief Bogo!")
            .pressKey('enter')
            .typeText("[name='message']", "How is it going?!")
            .pressKey('enter')
            .wait(3000)
            .typeText("[name='message']", "See you all later!")
            .pressKey('enter')
            .wait(1000)
    });