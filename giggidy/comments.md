# Comments

## Weird-ass Database

First, you're using a proprietary database that I don't have and I don't want
to download / buy a license to.  In short, as an Open source developer I want
nothing to do with this project.  If you want community support in future, I
recommend that you use an open stack set of tools like we've taught you in the
previous weeks.

My primary question is why you reached for this tool?  Was this something you
heard was cool? What was the performance reason why you reached for this.  If
you show this code to a hiring manager they will ask you this question and I
hope you have a good answer.

As a result of dependencies on this, I can't run your unit test suite.  I can't
migrate my database to be like yours because the max mind initializer runs as
part of the Rake initializer.  So basically, as a peer, as a more experienced
developer, it is near impossible for me to help.  And these decisions around
redis + this thing make it hard for me to clone your repo and help.  I would
love to clone your app and work up some preliminary changes in your OO, but
your stack choices prevent me from helping.

**You built an app I can't help you with**

## Static notes

* Your specs don't run on the server.  I'm not sure if this is because you're
in active development or not.  Because I can't run the stuff locally I have
to hope that your code is merely in flight and changing.
* I was unable to run your javascript specs from the CLI on your DO account.  I
have no idea if your app has decent coverage on it's core thing.
* I really like that you made a rake task and made that task runner execute a
method on a class.  That's keeping with OO but also handling the systems
admin need properly.  Good job.
* Thanks for the `docs` dir.  Helps me learn things.
* The views are small and look nice.
* You can segregate javascript files in app/assets/javascripts so you could add
a models/ controllers/ views/ directory.  You don't seem to ahve much in the
way of controllers but you probably should
* Overall you're well on your way to building a javascript MVC framework...I'd
love to help clean up the implementation but I can't.

## Crap in the repo

* Why is humans.txt committed?
* Why is there a BandsController when there is no Band model.
