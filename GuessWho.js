_oc=new DWObjectCode(0,4,1);
var _DWPub = new DWPublication(0,"GuessWho",true,1,false);
DWVariables.instance().initPublication(_DWPub,'SCORE',0, 'SCORE_VALUE',0, 'SCORE_VALUE_TOTAL',0, 'SCORE_VALUE_PERCENT',0, 'SCORE_CORRECT',0, 'SCORE_INCORRECT',0, 'SCORE_TOTAL',0, 'SCORE_PERCENT',0, 'SCORE_TOTAL_POSSIBLE',0, 'SCORE_TOTAL_QUESTIONS',0, 'SCORE_CURRENT_POSSIBLE',0, 'CHAPTER_PASSWORD',"", 'PUBLICATION_TIME',0, 'SYSTEM_TIME_YEAR',0, 'SYSTEM_TIME_MONTH',0, 'SYSTEM_TIME_DATE',0, 'SYSTEM_TIME_DAY',0, 'SYSTEM_TIME_HOUR',0, 'SYSTEM_TIME_MINUTE',0, 'SYSTEM_TIME_SECOND',0, 'SYSTEM_TIME_12HOUR',0, 'SYSTEM_TIME_AMPM',0, 'SYSTEM_DATE_FULL',"", 'SYSTEM_WIN_DIR',"", 'SYSTEM_WINSYS_DIR',"", 'SYSTEM_DOCUMENTS_DIR',"", 'SYSTEM_PROGRAMS_DIR',"", 'SYSTEM_PROGRAMDATA_DIR',"", 'SYSTEM_USERNAME',"", 'SYSTEM_PUBLICATION_DIR',"", 'SYSTEM_CD_DRIVE',"", 'SYSTEM_TEMP_DIR',"", 'PUBLICATION_TITLE',"", 'PUBLICATION_PAGE_TITLE',"", 'SYSTEM_COLOUR_DEPTH',0, 'SYSTEM_SCREEN_RES_X',0, 'SYSTEM_SCREEN_RES_Y',0, 'SYSTEM_OPERATING_SYS',0, 'SYSTEM_HAS_SOUND',"", 'LOGIN_USER_NAME',"", 'LOGIN_LEVEL_VALUE',"", 'LOGIN_LEVEL_NAME',"", 'LOGIN_FIRSTNAME',"", 'LOGIN_SURNAME',"", 'LOGIN_LEARNER_ID',"", 'LOGIN_TUTOR',"", 'LOGIN_DEPT',"", 'LOGIN_MANAGER',"", 'LOGIN_ORGANIZATION',"", 'LOGIN_USER_EMAIL',"", 'LOGIN_SCORE_EMAIL',"", 'USER_VOL',0, 'RADIO_GROUP_1_ID',-1, 'RADIO_GROUP_1_NAME',"", 'RADIO_GROUP_2_ID',-1, 'RADIO_GROUP_2_NAME',"", 'RADIO_GROUP_3_ID',-1, 'RADIO_GROUP_3_NAME',"", 'RADIO_GROUP_4_ID',-1, 'RADIO_GROUP_4_NAME',"", 'Q_SCORE_VALUE',0, 'Q_SCORE_VALUE_TOTAL',0, 'Q_SCORE_VALUE_PERCENT',0, 'Q_SCORE_CORRECT',0, 'Q_SCORE_INCORRECT',0, 'Q_SCORE_TOTAL',0, 'Q_SCORE_TOTAL_POSSIBLE',0, 'Q_SCORE_TOTAL_QUESTIONS',0, 'Q_SCORE_ANSWERED_QUESTIONS',0, 'Q_SCORE_CURRENT_POSSIBLE',0, 'Q_SCORE_VALUE_POSSIBLE',0, 'Q_SCORE_VALUE_TOTAL_REMAINING',0, 'Q_SCORE_OVERALL_PERCENT',0, 'Q_SCORE_COURSE_SUMMARY',"", 'Q_SCORE_PERCENT_POSSIBLE',0, 'Q_SCORE_COURSE_FINISHED',"", 'Q_SCORE_COURSE_PASSED',"", 'Q_COURSE_ADMINISTRATOR',"", 'Q_COURSE_ADMINISTRATOR_EMAIL',"", 'Q_TOPIC_NAME',new Object, 'Q_TOPIC_PASS_VALUE',new Object, 'Q_TOPIC_CRITICAL_PASS',new Object, 'Q_TOPIC_CURRENT_VALUE',new Object, 'Q_TOPIC_CURRENT_PERCENT',new Object, 'Q_TOPIC_CURRENT_POSSIBLE',new Object, 'Q_TOPIC_TOTAL_POSSIBLE',new Object, 'Q_TOPIC_CORRECT',new Object, 'Q_TOPIC_INCORRECT',new Object, 'Q_TOPIC_ANSWERED_QUESTIONS',new Object, 'Q_TOPIC_TOTAL_QUESTIONS',new Object, 'Q_TOPIC_VALUE_TOTAL_REMAINING',new Object, 'Q_TOPIC_OVERALL_PERCENT',new Object, 'Q_TOPIC_PASSED',new Object, 'Q_TOPIC_FINISHED',new Object);
if(true){var topics = new Array(1);topics[0] = new DWCBTTopic('Topic 1', 100.000000, true, false);DWCBTManager.instance().initialise(topics, '', '', '');}
var GuessWho1 = new DWChapter();
GuessWho1.setObjectCode(new DWObjectCode(0,2,1));
_DWPub.addChild(GuessWho1);
_DWPub.index=index=new DWPage('index',_oc,1280,720,1280,720,1280,720,false,0,false);
GuessWho1.addChild(index);
_c=new DWColour(255,255,255,1.0);
_oc1=new DWObjectCode(1,10,15);
_c1=new DWColour(0,101,148,1.0);
_pp=['M',0.000,-80.000,'C',41.250,-80.000,75.000,-44.000,75.000,0.000,'C',75.000,44.000,41.250,80.000,0.000,80.000,'C',-41.250,80.000,-75.000,44.000,-75.000,0.000,'C',-75.000,-44.000,-41.250,-80.000,0.000,-80.000,'L',0.000,-80.000];
var _br=new DWSolidBrush(_c1);
var _pl=new DWPolygon(_br,null,null,_pp);
tr=new DWRevealTransition(500,true).addBlock(0,0,1000,1000,0,0,1000,1000,0,100,-0.0,1.0,0);
tr1=new DWRevealTransition(500,false).addBlock(0,0,500,500,1000,1000,1000,1000,0,100,1.0,1.0,0).addBlock(500,0,1000,500,0,1000,0,1000,0,100,1.0,1.0,0).addBlock(0,500,500,1000,1000,0,1000,0,0,100,1.0,1.0,0).addBlock(500,500,1000,1000,0,0,0,0,0,100,1.0,1.0,0);
tr2=new DWRevealTransition(300,false).addBlock(0,0,1000,1000,0,0,1000,1000,0,100,-0.0,1.0,0);
_oc2=new DWObjectCode(2,0,17);
_oc3=new DWObjectCode(1,10,14);
_oc4=new DWObjectCode(2,0,16);
_oc5=new DWObjectCode(1,10,13);
_oc6=new DWObjectCode(2,0,15);
_oc7=new DWObjectCode(1,10,12);
_oc8=new DWObjectCode(2,0,14);
_oc9=new DWObjectCode(1,10,11);
_oc10=new DWObjectCode(2,0,13);
_oc11=new DWObjectCode(1,1,3);
_c2=new DWColour(0,0,0,0.4);
_oc12=new DWObjectCode(1,13,3);
_oc13=new DWObjectCode(1,3,13);
_oc14=new DWObjectCode(1,3,14);
_oc15=new DWObjectCode(1,3,15);
_oc16=new DWObjectCode(1,3,16);
_oc17=new DWObjectCode(1,3,17);
_oc18=new DWObjectCode(1,4,23);
tr3=new DWRevealTransition(1000,false).addBlock(0,0,1000,1000,0,0,1000,1000,0,100,-0.0,1.0,0);
tr4=new DWRevealTransition(300,true).addBlock(0,0,1000,1000,0,0,1000,1000,0,100,-0.0,1.0,0);
_oc19=new DWObjectCode(1,4,19);
_oc20=new DWObjectCode(1,4,18);
_oc21=new DWObjectCode(1,4,17);
_oc22=new DWObjectCode(1,4,16);
_oc23=new DWObjectCode(1,4,15);

index.init('indexD',function(){var p = this;p.PauHot=new DWVector('PauHotD',_oc1,'PauHot',355.0,220.0,150,160);
p.its_Pauline_ogg=new DWAudio(_oc2);
p.EllenHot=new DWVector('EllenHotD',_oc3,'EllenHot',625.0,140.0,150,160);
p.NowTheresEllen_ogg=new DWAudio(_oc4);
p.GerHot=new DWVector('GerHotD',_oc5,'GerHot',835.0,310.0,150,160);
p.And_this_is_Geraldine_ogg=new DWAudio(_oc6);
p.AnnHot=new DWVector('AnnHotD',_oc7,'AnnHot',615.0,410.0,150,160);
p.thats_Ann_ogg=new DWAudio(_oc8);
p.TinaHot=new DWVector('TinaHotD',_oc9,'TinaHot',405.0,470.0,150,160);
p.Thats_Martina_ogg=new DWAudio(_oc10);
p.Frame_2=new DWFrame('Frame_2D',_oc11,'Frame 2',1125.0,150.0,190,200);
p.Group_2=new DWFrame('Group_2G',_oc12,'Group 2',0.0,0.0,190,200);
p.Ellen=new DWImage('EllenG',_oc13,'Ellen',0.0,0.0,190,200);
p.Ger=new DWImage('GerG',_oc14,'Ger',0.0,0.0,190,200);
p.Ann=new DWImage('AnnG',_oc15,'Ann',0.0,0.0,190,200);
p.Tina=new DWImage('TinaG',_oc16,'Tina',-1.0,1.0,190,200);
p.Pauline=new DWImage('PaulineG',_oc17,'Pauline',0.0,0.0,190,200);
p.Clicktosee=new DWText('ClicktoseeD',_oc18,'Clicktosee',640.0,665.0,630,50);
p.TextPauline=new DWText('TextPaulineD',_oc19,'TextPauline',1124.0,271.5,190,43);
p.TextEllen=new DWText('TextEllenD',_oc20,'TextEllen',1125.0,271.5,190,43);
p.TextGer=new DWText('TextGerD',_oc21,'TextGer',1125.0,271.5,190,43);
p.TextAnn=new DWText('TextAnnD',_oc22,'TextAnn',1125.0,271.5,190,43);
p.TextMartina=new DWText('TextMartinaD',_oc23,'TextMartina',1125.0,271.5,190,43);
p.PauHot.addPolygons(0,null,0,_pl);
p.PauHot.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWActionGroup(new DWActionList(new DWSimpleAction(p.TextMartina.hideAction.bind(p.TextMartina,tr)),new DWSimpleAction(p.TextAnn.hideAction.bind(p.TextAnn,tr)),new DWSimpleAction(p.TextGer.hideAction.bind(p.TextGer,tr)),new DWSimpleAction(p.TextEllen.hideAction.bind(p.TextEllen,tr)),new DWSimpleAction(p.Tina.hideAction.bind(p.Tina,tr)),new DWSimpleAction(p.Ann.hideAction.bind(p.Ann,tr)),new DWSimpleAction(p.Ger.hideAction.bind(p.Ger,tr)),new DWSimpleAction(p.Ellen.hideAction.bind(p.Ellen,tr)))), 
			new DWSimpleAction(p.Pauline.showAction.bind(p.Pauline,tr1)), 
			new DWPlaySoundAction(0, 100, false, true, -1, p.its_Pauline_ogg), 
			new DWSimpleAction(p.TextPauline.showAction.bind(p.TextPauline,tr2))
		)
	)
));
p.its_Pauline_ogg.addResource('its_Pauline.mp3','audio/mpeg;codecs="mp3"').addResource('its_Pauline.ogg','audio/ogg;codecs="vorbis"');
p.PauHot.addChildren(p.its_Pauline_ogg);
p.PauHot.setIgnoreTransparentArea(true);
p.EllenHot.addPolygons(0,null,0,_pl);
p.EllenHot.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWActionGroup(new DWActionList(new DWSimpleAction(p.TextMartina.hideAction.bind(p.TextMartina,tr)),new DWSimpleAction(p.TextAnn.hideAction.bind(p.TextAnn,tr)),new DWSimpleAction(p.TextGer.hideAction.bind(p.TextGer,tr)),new DWSimpleAction(p.TextPauline.hideAction.bind(p.TextPauline,tr)),new DWSimpleAction(p.Pauline.hideAction.bind(p.Pauline,tr)),new DWSimpleAction(p.Tina.hideAction.bind(p.Tina,tr)),new DWSimpleAction(p.Ann.hideAction.bind(p.Ann,tr)),new DWSimpleAction(p.Ger.hideAction.bind(p.Ger,tr)))), 
			new DWSimpleAction(p.Ellen.showAction.bind(p.Ellen,tr1)), 
			new DWPlaySoundAction(0, 100, false, true, -1, p.NowTheresEllen_ogg), 
			new DWSimpleAction(p.TextEllen.showAction.bind(p.TextEllen,tr2))
		)
	)
));
p.NowTheresEllen_ogg.addResource('NowTheresEllen.mp3','audio/mpeg;codecs="mp3"').addResource('NowTheresEllen.ogg','audio/ogg;codecs="vorbis"');
p.EllenHot.addChildren(p.NowTheresEllen_ogg);
p.EllenHot.setIgnoreTransparentArea(true);
p.GerHot.addPolygons(0,null,0,_pl);
p.GerHot.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWActionGroup(new DWActionList(new DWSimpleAction(p.TextMartina.hideAction.bind(p.TextMartina,tr)),new DWSimpleAction(p.TextAnn.hideAction.bind(p.TextAnn,tr)),new DWSimpleAction(p.TextEllen.hideAction.bind(p.TextEllen,tr)),new DWSimpleAction(p.TextPauline.hideAction.bind(p.TextPauline,tr)),new DWSimpleAction(p.Pauline.hideAction.bind(p.Pauline,tr)),new DWSimpleAction(p.Tina.hideAction.bind(p.Tina,tr)),new DWSimpleAction(p.Ann.hideAction.bind(p.Ann,tr)),new DWSimpleAction(p.Ellen.hideAction.bind(p.Ellen,tr)))), 
			new DWSimpleAction(p.Ger.showAction.bind(p.Ger,tr1)), 
			new DWPlaySoundAction(0, 100, false, true, -1, p.And_this_is_Geraldine_ogg), 
			new DWSimpleAction(p.TextGer.showAction.bind(p.TextGer,tr2))
		)
	)
));
p.And_this_is_Geraldine_ogg.addResource('And this is Geraldine.mp3','audio/mpeg;codecs="mp3"').addResource('And this is Geraldine.ogg','audio/ogg;codecs="vorbis"');
p.GerHot.addChildren(p.And_this_is_Geraldine_ogg);
p.GerHot.setIgnoreTransparentArea(true);
p.AnnHot.addPolygons(0,null,0,_pl);
p.AnnHot.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWActionGroup(new DWActionList(new DWSimpleAction(p.TextMartina.hideAction.bind(p.TextMartina,tr)),new DWSimpleAction(p.TextGer.hideAction.bind(p.TextGer,tr)),new DWSimpleAction(p.TextEllen.hideAction.bind(p.TextEllen,tr)),new DWSimpleAction(p.TextPauline.hideAction.bind(p.TextPauline,tr)),new DWSimpleAction(p.Pauline.hideAction.bind(p.Pauline,tr)),new DWSimpleAction(p.Tina.hideAction.bind(p.Tina,tr)),new DWSimpleAction(p.Ger.hideAction.bind(p.Ger,tr)),new DWSimpleAction(p.Ellen.hideAction.bind(p.Ellen,tr)))), 
			new DWSimpleAction(p.Ann.showAction.bind(p.Ann,tr1)), 
			new DWPlaySoundAction(0, 100, false, true, -1, p.thats_Ann_ogg), 
			new DWSimpleAction(p.TextAnn.showAction.bind(p.TextAnn,tr2))
		)
	)
));
p.thats_Ann_ogg.addResource('thats Ann.mp3','audio/mpeg;codecs="mp3"').addResource('thats Ann.ogg','audio/ogg;codecs="vorbis"');
p.AnnHot.addChildren(p.thats_Ann_ogg);
p.AnnHot.setIgnoreTransparentArea(true);
p.TinaHot.addPolygons(0,null,0,_pl);
p.TinaHot.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWActionGroup(new DWActionList(new DWSimpleAction(p.TextAnn.hideAction.bind(p.TextAnn,tr)),new DWSimpleAction(p.TextGer.hideAction.bind(p.TextGer,tr)),new DWSimpleAction(p.TextEllen.hideAction.bind(p.TextEllen,tr)),new DWSimpleAction(p.TextPauline.hideAction.bind(p.TextPauline,tr)),new DWSimpleAction(p.Pauline.hideAction.bind(p.Pauline,tr)),new DWSimpleAction(p.Ann.hideAction.bind(p.Ann,tr)),new DWSimpleAction(p.Ger.hideAction.bind(p.Ger,tr)),new DWSimpleAction(p.Ellen.hideAction.bind(p.Ellen,tr)))), 
			new DWSimpleAction(p.Tina.showAction.bind(p.Tina,tr1)), 
			new DWPlaySoundAction(0, 100, false, true, -1, p.Thats_Martina_ogg), 
			new DWSimpleAction(p.TextMartina.showAction.bind(p.TextMartina,tr2))
		)
	)
));
p.Thats_Martina_ogg.addResource('Thats Martina.mp3','audio/mpeg;codecs="mp3"').addResource('Thats Martina.ogg','audio/ogg;codecs="vorbis"');
p.TinaHot.addChildren(p.Thats_Martina_ogg);
p.TinaHot.setIgnoreTransparentArea(true);
p.Ellen.setInitiallyHidden( true, -1 );
p.Ger.setInitiallyHidden( true, -1 );
p.Ann.setInitiallyHidden( true, -1 );
p.Tina.setInitiallyHidden( true, -1 );
p.Pauline.setInitiallyHidden( true, -1 );
p.Group_2.addChildren(p.Ellen,p.Ger,p.Ann,p.Tina,p.Pauline);
p.Frame_2.addChildren(p.Group_2);
p.Clicktosee.setShowTransition(tr3);
p.Clicktosee.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWActionGroup(new DWActionList(new DWSimpleAction(p.TextMartina.hideAction.bind(p.TextMartina,tr4)),new DWSimpleAction(p.TextAnn.hideAction.bind(p.TextAnn,tr4)),new DWSimpleAction(p.TextGer.hideAction.bind(p.TextGer,tr4)),new DWSimpleAction(p.TextEllen.hideAction.bind(p.TextEllen,tr4)),new DWSimpleAction(p.TextPauline.hideAction.bind(p.TextPauline,tr4)),new DWSimpleAction(p.Pauline.hideAction.bind(p.Pauline,tr4)),new DWSimpleAction(p.Tina.hideAction.bind(p.Tina,tr4)),new DWSimpleAction(p.Ann.hideAction.bind(p.Ann,tr4)),new DWSimpleAction(p.Ger.hideAction.bind(p.Ger,tr4)),new DWSimpleAction(p.Ellen.hideAction.bind(p.Ellen,tr4))))
		)
	)
));
p.Clicktosee.setInitiallyHidden( true, 0 );
p.TextPauline.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnShow')
		),
		new DWActionList(
			new DWActionLoop(0, null, false, new DWActionList(
				new DWAnimateScale( 200, 1, 1, false, DWAnimationSpeed.EaseInOut, 110.000000, 110.000000, p.TextPauline), 
				new DWActionDelay(500)
			))
		)
	)
));
p.TextPauline.setInitiallyHidden( true, -1 );
p.TextEllen.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnShow')
		),
		new DWActionList(
			new DWActionLoop(0, null, false, new DWActionList(
				new DWAnimateScale( 200, 1, 1, false, DWAnimationSpeed.EaseInOut, 110.000000, 110.000000, p.TextEllen), 
				new DWActionDelay(500)
			))
		)
	)
));
p.TextEllen.setInitiallyHidden( true, -1 );
p.TextGer.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnShow')
		),
		new DWActionList(
			new DWActionLoop(0, null, false, new DWActionList(
				new DWAnimateScale( 200, 1, 1, false, DWAnimationSpeed.EaseInOut, 110.000000, 110.000000, p.TextGer), 
				new DWActionDelay(500)
			))
		)
	)
));
p.TextGer.setInitiallyHidden( true, -1 );
p.TextAnn.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnShow')
		),
		new DWActionList(
			new DWActionLoop(0, null, false, new DWActionList(
				new DWAnimateScale( 200, 1, 1, false, DWAnimationSpeed.EaseInOut, 110.000000, 110.000000, p.TextAnn), 
				new DWActionDelay(500)
			))
		)
	)
));
p.TextAnn.setInitiallyHidden( true, -1 );
p.TextMartina.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnShow')
		),
		new DWActionList(
			new DWActionLoop(0, null, false, new DWActionList(
				new DWAnimateScale( 200, 1, 1, false, DWAnimationSpeed.EaseInOut, 110.000000, 110.000000, p.TextMartina), 
				new DWActionDelay(500)
			))
		)
	)
));
p.TextMartina.setInitiallyHidden( true, -1 );
index.addChildren(p.PauHot,p.EllenHot,p.GerHot,p.AnnHot,p.TinaHot,p.Frame_2,p.Clicktosee,p.TextPauline,p.TextEllen,p.TextGer,p.TextAnn,p.TextMartina);
});_DWPub.setCurrentPage(index);
window.onload=_DWPub.start.bind(_DWPub);
window.onunload=function(){};
