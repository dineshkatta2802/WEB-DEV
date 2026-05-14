import React, { useState } from 'react';
import './RC.css';

export default function RuleCounterEngine() {
const [counters, setCounters] = useState([
    { id: 'A', val: 0 },
    { id: 'B', val: 0 },
    { id: 'C', val: 0 },
]);

const [isLocked, setIsLocked] = useState(false);

const rules = [
    // A > 5 => B = 0
    {
    condition: (cs) => cs.find(c => c.id === 'A')?.val > 5,
    action: (cs) =>
        cs.map(c => (c.id === 'B' ? { ...c, val: 0 } : c)),
    },

    // Total >= 20 => "LOCK"
    {
    condition: (cs) => cs.reduce((sum, c) => sum + c.val, 0) >= 20,
    action: () => 'LOCK',
    },

    // Any negative value => reset to 0
    {
    condition: (cs) => cs.some(c => c.val < 0),
    action: (cs) =>
        cs.map(c => (c.val < 0 ? { ...c, val: 0 } : c)),
    },
];

function counterUpdater(id, delta) {
    if (isLocked) return;

    const updated = counters.map(c =>
    c.id === id ? { ...c, val: c.val + delta } : c);

    applyRules(updated);
}

function applyRules(initialCounters) {
    let finalCounters = initialCounters;
    let lock = false;

    for (const rule of rules) {
    if (rule.condition(finalCounters)) {
        const result = rule.action(finalCounters);

        if (result === 'LOCK') {
        lock = true;
        } else {
        finalCounters = result;
        }
    }
    }

    setCounters(finalCounters);
    setIsLocked(lock);
}

return (
    <div className="RCECon">
    <h1 className="heading">Rule Counter Engine</h1>

    <div className="container">
        <div className="counters">
        {counters.map(c => (
            <div key={c.id} className="counterEle">
            <span>{c.id}</span>
            <span>{c.val}</span>
            </div>
        ))}
        </div>

        <div className="buttons">
        {counters.map(c => (
            <div key={c.id} className="buttonEle">
                <span><button onClick={() => counterUpdater(c.id, 1)}>+</button></span>
                <span><button onClick={() => counterUpdater(c.id, -1)}>-</button></span>
            </div>
        ))}
        </div>

        {isLocked && (
        <div className="locked">
            The total is greater than or equal to 20!
        </div>
        )}
    </div>
    </div>
);
}
