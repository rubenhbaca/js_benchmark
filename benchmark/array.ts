import { test } from 'ava';
import * as benchmark from 'benchmark';
import { v4 } from 'uuid';
import * as faker from 'faker';

interface msg {
    uuid: string,
    message: string
}

const ids: string[] = [];
const fixDictionary = {};
const fixArray: msg[] = [];

const maxMsg = 300;

const min = 0;
const max = maxMsg;
const sequence: number[] = [];

function Factory() {
    var self = this;

    self.generateFix = function (): msg {
        const uuid: string = v4();
        const message: string = faker.lorem.sentence();

        return {
            uuid,
            message
        }
    }
}

test.before(t => {
    const factory = new Factory();
    let i = 0;

    while (i < maxMsg) {
        const msg: msg = factory.generateFix();

        ids.push(msg.uuid);
        fixDictionary[msg.uuid] = msg.message;
        fixArray.push(msg);

        sequence.push(Math.random() * (+max - +min) + +min);

        i++;
    }
})

test('Array vs Dictionary, Lookup Benchmark', t => {
    let suite = new benchmark.Suite;

    suite
        .add('Dictionary Lookup', () => {
            var i = 0;

            while(i < sequence.length){
                const index = sequence[i];
                const uuid = ids[index];

                const message = fixDictionary[uuid];

                i++;
            }
        })
        .add('Array Lookup, find', () => {
            var i = 0;

            while(i < sequence.length){
                const index = sequence[i];
                const uuid = ids[index];

                const message = fixArray.find(msg => {
                    return msg.uuid === uuid;
                });

                i++;
            }
        })
        // add listeners
		.on('cycle', function (event) {
			console.log('    ' + String(event.target));
        })
        .on('complete', function () {
			console.log('\n    Fastest is ' + this.filter('fastest').map('name') + '\n');
        })
        // run async
        .run({ 'async': false });

    t.true(true);
});