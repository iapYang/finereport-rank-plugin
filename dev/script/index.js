import $ from 'jquery';

import '../style/style.scss';

import Rank from './rank';

const $starContaniner = $('.star-container');
const $heartContaniner = $('.heart-container');

new Rank($starContaniner, 10, 'star');
const heart = new Rank($heartContaniner, 10, 'heart');
heart.setValue(1);

